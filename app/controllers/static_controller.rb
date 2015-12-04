class StaticController < ApplicationController

  def index
    @q1 = ["January", "February", "March"]
    @q2 = ["April", "May", "June"]
    @q3 = ["July", "August", "September"]
    @q4 = ["October", "November", "December"]
  end

end