attributes :id, :name, :age, :title, :avatar_url, :created_at, :updated_at

node do |staff_member|
  {
    :created_at_formatted => staff_member.created_at.strftime("%m/%d/%Y"),
    :updated_at_formatted => time_ago_in_words(staff_member.updated_at)
  }
end
