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

ActiveRecord::Schema.define(version: 20130701062611) do

  create_table "college_settings", force: true do |t|
    t.string   "college_id"
    t.string   "default_password"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "colleges", force: true do |t|
    t.string   "name"
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.text     "address"
    t.string   "city"
    t.string   "state"
    t.string   "phone"
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
  end

  add_index "colleges", ["email"], name: "index_colleges_on_email", unique: true, using: :btree
  add_index "colleges", ["reset_password_token"], name: "index_colleges_on_reset_password_token", unique: true, using: :btree

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
