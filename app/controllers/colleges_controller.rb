class CollegesController < ApplicationController
  before_action :authenticate_college!
  layout "college"
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
    if current_college.college_setting.present?
      if(current_college.college_setting.default_password.present?)
      params[:student][:password] = current_college.college_setting.default_password
      end
    end
     @student = current_college.students.create(student_params)
    if @student.persisted?
     redirect_to(add_student_path(), :notice =>  "Student Created Successfully")
     #render :action => "add_student"
    else
      render :action => "add_student"
    end
  
  end
  
  def new_default_password
    @default_password = CollegeSetting.new
    
  end
  
  def create_default_password
    if(current_college.college_setting.present?)
      @default_password = current_college.college_setting.update(params[:college_setting].permit(:default_password))
     else
     @default_password = current_college.build_college_setting(params[:college_setting].permit(:default_password))
     @default_password = @default_password.save
    end 
    
    if @default_password
      redirect_to(colleges_path(), :notice =>  "Password Created Successfully")
    else
      render :action => "new_default_password"
    end
    
  end
  
  def new_import
    
  
  end
  
  
  def create_import
  if current_college.college_setting.present?
      if(current_college.college_setting.default_password.present?)
         Student.import(params[:file], current_college)
         redirect_to new_import_path, notice: "Students Successfully Imported."
       else
        redirect_to(new_import_path(), :notice => "Please set Default Password")
      end
      
     else
       redirect_to(new_import_path(), :notice => "Please set Default Password") 
      
    end
  
  end
  
  private
   def student_params
      params.require(:student).permit(:name, :email, :register_no, :password)
    end

end
