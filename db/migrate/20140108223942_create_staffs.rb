class CreateStaffs < ActiveRecord::Migration
  def change
    create_table :staffs do |t|
      t.string :name
      t.integer :age
      t.string :title
      t.string :avatar_url

      t.timestamps
    end
  end
end
