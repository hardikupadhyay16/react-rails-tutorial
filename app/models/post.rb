class Post < ApplicationRecord
  belongs_to :user
  validates :title, presence: true
  validates :description, presence: true

  reverse_geocoded_by :latitude, :longitude
  # after_validation :reverse_geocode
end
