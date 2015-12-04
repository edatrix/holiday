class StaticController < ApplicationController

  def index
    @months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  end

end