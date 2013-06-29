class CreateStudents < ActiveRecord::Migration
  def change
    create_table :students do |t|
      t.string :name
      t.references :college
      t.string :email
      t.string :register_no
      t.string :password
      t.string :status
      t.integer :logins

      t.timestamps
    end
  end
end
