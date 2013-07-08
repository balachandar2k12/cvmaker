class AddCanvasDataToCvs < ActiveRecord::Migration
  def change
    add_column :cvs, :canvas_data, :text
    add_column :cvs, :chart_data, :text
    add_column :cvs, :extra_data, :text
  end
end
