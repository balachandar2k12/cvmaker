class Subscription < ActiveRecord::Base
  belongs_to :college
  validates :count, presence: true,  :numericality => true
  
end
