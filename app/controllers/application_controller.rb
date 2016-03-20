class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_filter :redirect_if_old

  protected

  APP_DOMAIN = 'http://spluhring-holiday-2015.herokuapp.com/'

  def redirect_if_old
    if request.host == 'http://spluhring-2015.com/'
      redirect_to "http://#{APP_DOMAIN}#{request.request_uri}", :status => 301
    end
  end

end