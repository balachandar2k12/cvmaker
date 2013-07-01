class CreateCollegeSettings < ActiveRecord::Migration
  def change
    create_table :college_settings do |t|
      t.string :college_id
      t.string :default_password

      t.timestamps
    end
  end
end
