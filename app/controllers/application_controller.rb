class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_filter :configure_permitted_parameters, if: :devise_controller?
  
   def after_sign_in_path_for(resource)
      add_student_path()
  end

  protected

  def configure_permitted_parameters
   
        devise_parameter_sanitizer.for(:account_update) { |u| u.permit(:username, :email, :name, :address, :city, :state, :phone, :password, :password_confirmation, :current_password) }
        devise_parameter_sanitizer.for(:sign_up) { |u| u.permit(:username, :email, :name, :address, :city, :state, :phone, :password, :password_confirmation) }
  end
  
  protected 
    # Returns the currently logged in user or nil if there isn't one
    def current_student
      return unless session[:student_id]
      @current_student ||= Student.where(:id => session[:student_id]) 
    end
 
    # Make current_user available in templates as a helper
    helper_method :current_student
 
    # Filter method to enforce a login requirement
    # Apply as a before_filter on any controller you want to protect
    def authenticate
      logged_in? ? true : access_denied
    end
 
    # Predicate method to test for a logged in user    
    def logged_in?
      current_student.is_a? Student
    end
 
    # Make logged_in? available in templates as a helper
    helper_method :logged_in?
 
    def access_denied
      redirect_to student_login_path, :notice => "Please log in to continue" and return false
    end
end
