class StaffController < ApplicationController
  respond_to :json

  def index
    @staff = Staff.all
  end
end
