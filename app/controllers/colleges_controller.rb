class CollegesController < ApplicationController
  before_action :authenticate_college!
  def index
    
    
  end
  
  def new_subscription
    
    
  end
  
  def create_subscription
    
    
  end
  
  def add_student
    
    @student = Student.new
   
  end
  
  def create_student
    if current_college.students.create(student_params)
      redirect_to(add_student_path(), :notice =>  "Student Created Successfully")
    else
      render :action => "new"
    end
  
  end
  
  private
   def student_params
      params.require(:student).permit(:name, :email, :register_no, :password)
    end

end
