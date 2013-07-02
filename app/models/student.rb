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
  
  protected
  def encrypt_new_password
    return if password.blank?
      self.password = encrypt(password)
  end
 
  def encrypt(string)
      Digest::SHA1.hexdigest(string)
  end
end