# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
college=College.create(:name=>"ABC College",:email=>"abc@college.com":address=>"Bangalore",:city=>"Bangalore",:state=>"Karnataka",:phone=>"9999999999",:password=>"12345678")
col_set = college.college_settings.create(:default_password=>"12345678")
