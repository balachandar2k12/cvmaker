class Template < ActiveRecord::Base
  has_attached_file :resume, :styles => { :medium => "800x800>", :thumb => "200x200>" }
  has_and_belongs_to_many :students
end
