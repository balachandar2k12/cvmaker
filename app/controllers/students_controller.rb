class StudentsController < ApplicationController
  
 def login
    if student = Student.authenticate(params[:register_no], params[:password])
      session[:student_id] = student.id
      redirect_to root_path, :notice => "Logged in successfully"
    else
      flash.now[:alert] = "Invalid login/password combination"
      render :action => 'new_login'
    end
  end
  
  def logout
    reset_session
    redirect_to root_path, :notice => "You successfully logged out"
  end
end
