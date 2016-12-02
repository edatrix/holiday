Rails.application.routes.draw do

  root "home#index"

  get "/", :to => "home#index"

  resources :two015, :only => [:index], :path => 2015
  resources :two016, :only => [:index], :path => 2016

end
