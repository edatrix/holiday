Rails.application.routes.draw do

  root "static#index"

  get "/", :to => "static#index"
end
