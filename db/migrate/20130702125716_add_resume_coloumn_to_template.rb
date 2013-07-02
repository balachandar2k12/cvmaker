class AddResumeColoumnToTemplate < ActiveRecord::Migration
  def change
  	add_attachment :templates, :resume
  end
end
