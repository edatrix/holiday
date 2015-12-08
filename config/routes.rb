Rails.application.routes.draw do

  root "static#index"

  get "/", :to => "static#index"
  get "/by-the-month", :to => "static#by_the_month"
end
