require 'digest'
class Student < ActiveRecord::Base
  belongs_to :college
  validates :name, :register_no,  presence: true
  validates :register_no, :email, uniqueness: true
  validates :email, :email_format => {:message => 'is not looking good'}
  validates :password, :presence => { :message => "is empty . Opps You Did'nt Added Default Password For Students" }
  before_save :encrypt_new_password
    
  def self.authenticate(registerno, password)
    student  =  Student.where(register_no: registerno).take
    return student if student && student.authenticated?(password)
  end
 
  def authenticated?(pass)
    self.password == encrypt(pass)
  end
  
  def self.import(file, current_college)
  spreadsheet = open_spreadsheet(file)
  header = spreadsheet.row(1)
  (2..spreadsheet.last_row).each do |i|
    row = Hash[[header, spreadsheet.row(i)].transpose]
   Rails.logger.info "plain row: #{row}"
    row = row.to_hash
    
    row["password"] = current_college.college_setting.default_password
    row["college_id"] = current_college.id
    
     Rails.logger.warn "added row: #{row}"
     student = Student.new(row)
      return student.save
      
    
   end
  end
  
  def self.open_spreadsheet(file)
     case File.extname(file.original_filename)
     when '.csv' then Roo::Csv.new(file.path, nil, :ignore)
     when '.xls' then Roo::Excel.new(file.path, nil, :ignore)
     when '.xlsx' then Roo::Excelx.new(file.path, nil, :ignore)
  else raise "Unknown file type: #{file.original_filename}"
    end
  end
  protected
  def encrypt_new_password
    return if password.blank?
      self.password = encrypt(password)
  end
 
  def encrypt(string)
      Digest::SHA1.hexdigest(string)
  end
end