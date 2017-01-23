class SessionsController < ApplicationController
  before_action :authenticate_user!, only: :destroy
  def create
    @user = User.find_for_database_authentication(email: params[:user][:email])
    return invalid_login_attempt unless @user
    @token = @user.authentications.build
    @token.save
    if @user.valid_password?(params[:user][:password])
      sign_in :user, @user
      render json: @token
    else
      invalid_login_attempt
    end
  end

  def destroy
    reset_session
    @token.destroy
  end
  private

  def invalid_login_attempt
    warden.custom_failure!
    render json: {error: 'Invalid Email or Password'}, status: :unprocessable_entity
  end
end
