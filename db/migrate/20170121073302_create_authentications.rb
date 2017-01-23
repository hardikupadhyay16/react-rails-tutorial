class CreateAuthentications < ActiveRecord::Migration[5.0]
  def change
    create_table :authentications do |t|
      t.string :auth_token
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
