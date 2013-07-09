class CollegesController < ApplicationController
  before_action :authenticate_college!
  layout "college"
  def index
    
    
  end
   
  def dashboard
    
  end
  
  def new_subscription
    @subscription = current_college.subscription.new
    
  end
  
  def create_subscription
    @subscription = current_college.subscription.new(params[:subscription].permit(:count))
    if @subscription.save
      redirect_to new_subscription_path(), :notice => "Subscription Request Sent Successfully"
    else
      render :action => "new_subscription"
    end
    
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
    begin
  if current_college.college_setting.present?
      if(current_college.college_setting.default_password.present?)
         if Student.import(params[:file], current_college)
         redirect_to new_import_path, notice: "Students Successfully Imported."
         else
           redirect_to new_import_path, notice: "There is some error in importing your excel file. Some or full records may not be entered"
         end
       else
        redirect_to(new_import_path(), :notice => "Please set Default Password")
      end
      
     else
       redirect_to(new_import_path(), :notice => "Please set Default Password") 
      
    end
  rescue Exception => msg 
     redirect_to(new_import_path(), :notice => "#{msg}") 
  end
  end
  
  private
   def student_params
      params.require(:student).permit(:name, :email, :register_no, :password)
    end

end
