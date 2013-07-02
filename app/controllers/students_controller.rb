class StudentsController < ApplicationController
  before_action :authenticate, except: [:new_login, :create_login]
  layout "student"
  
  def index
    
    
  end

 def create_login
   
    if student = Student.authenticate(params[:register_no], params[:password])
      session[:student_id] = student.id
      redirect_to students_path, :notice => "Logged in successfully"
    else
      flash.now[:alert] = "Invalid login/password combination"
      render :action => 'new_login'
 end 
   
 end
 
 def new_login
  
  end
  
  def logout
    reset_session
    redirect_to student_new_login_path, :notice => "You successfully logged out"
  end

end
