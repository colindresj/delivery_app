class StaffController < ApplicationController
  respond_to :json

  def index
    @staff = Staff.all
  end

  def show
    @staffer = Staff.find params[:id]
  end
end
