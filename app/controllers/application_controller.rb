class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session

  def authenticate_user!
    @token = Authentication.find_by(auth_token: params[:auth_token])
    if @token.present?
      @current_user = @token.user
      unless @current_user.present?
        render(json: {:status =>"Fail",:message => "No user found with this #{params[:auth_token]} auth token"})
      end
    else
      render(json: {:status => "Fail",:message => "Invalid authtoken."})
    end
  end
end
