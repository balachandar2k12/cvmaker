class CreateSubscriptions < ActiveRecord::Migration
  def change
    create_table :subscriptions do |t|
      t.references :college
      t.integer :count
      t.string :status
      t.string :usage
      t.string :price

      t.timestamps
    end
  end
end
