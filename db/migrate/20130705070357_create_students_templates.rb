class CreateStudentsTemplates < ActiveRecord::Migration
  def change
    create_table :students_templates do |t|
      t.references :student
      t.references :template
    end
  end
end
