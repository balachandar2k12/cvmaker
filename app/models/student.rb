class Student < ActiveRecord::Base
  belongs_to :college
  validates :name, :register_no,  presence: true
  validates :email, :email_format => {:message => 'is not looking good'}
  
  
end
