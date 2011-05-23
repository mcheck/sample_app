# == Schema Information
# Schema version: 20110225194014
#
# Table name: users
#
#  id         :integer         not null, primary key
#  email      :string(255)
#  password   :string(255)
#  created_at :datetime
#  updated_at :datetime
#

class User < ActiveRecord::Base
  attr_accessible :name, :email
  
  validates :name, :presence => true
end
