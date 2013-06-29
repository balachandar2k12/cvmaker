class CreateColleges < ActiveRecord::Migration
  def change
    create_table :colleges do |t|
      t.string :name
      t.string :email
      t.text :address
      t.string :city
      t.string :state
      t.string :phone

      t.timestamps
    end
  end
end
