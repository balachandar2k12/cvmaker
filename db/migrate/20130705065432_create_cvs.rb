class CreateCvs < ActiveRecord::Migration
  def change
    create_table :cvs do |t|
      t.references :student
      t.references :template
      t.text :content
      t.attachment :photo
      t.timestamps
    end
  end
end
