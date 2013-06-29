# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20130629075313) do

  create_table "colleges", force: true do |t|
    t.string   "name"
    t.string   "email"
    t.text     "address"
    t.string   "city"
    t.string   "state"
    t.string   "phone"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "statistics", force: true do |t|
    t.string   "login_date"
    t.integer  "college_id"
    t.integer  "student_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "students", force: true do |t|
    t.string   "name"
    t.integer  "college_id"
    t.string   "email"
    t.string   "register_no"
    t.string   "password"
    t.string   "status"
    t.integer  "logins"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "subscriptions", force: true do |t|
    t.integer  "college_id"
    t.integer  "count"
    t.string   "status"
    t.string   "usage"
    t.string   "price"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
