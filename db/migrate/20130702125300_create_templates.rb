class CreateTemplates < ActiveRecord::Migration
  def change
    create_table :templates do |t|
      t.string :title
      t.integer :user_count

      t.timestamps
    end
  end
end
