class CreateStatistics < ActiveRecord::Migration
  def change
    create_table :statistics do |t|
      t.string :login_date
      t.references :college
      t.references :student

      t.timestamps
    end
  end
end
