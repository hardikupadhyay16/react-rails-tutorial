class UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    respond_to do |format|
      if @user.save
        sign_in(User, @user)
        @token = @user.authentications.build
        @token.save
        format.html { redirect_to @user, notice: 'user was successfully created.' }
        format.json { render json: @token }
      else
        format.html { render :new }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_user
    @user = User.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def user_params
    params.require(:user).permit(:email, :password,:password_confirmation, :name)
  end
end
