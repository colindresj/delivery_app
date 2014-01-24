# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Staff.delete_all

Staff.create(:name => Faker::Name.name, :title => Faker::Name.title, :avatar_url => "assets/avatar.png", :age => (20..100).to_a.sample )
Staff.create(:name => Faker::Name.name, :title => Faker::Name.title, :avatar_url => "assets/avatar.png", :age => (20..100).to_a.sample )
Staff.create(:name => Faker::Name.name, :title => Faker::Name.title, :avatar_url => "assets/avatar.png", :age => (20..100).to_a.sample )
Staff.create(:name => Faker::Name.name, :title => Faker::Name.title, :avatar_url => "assets/avatar.png", :age => (20..100).to_a.sample )
Staff.create(:name => Faker::Name.name, :title => Faker::Name.title, :avatar_url => "assets/avatar.png", :age => (20..100).to_a.sample )
