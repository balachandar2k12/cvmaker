class TemplatesController < ApplicationController
  require 'uri'
  
  before_action :authenticate, :only =>[ :save]
  skip_before_filter :verify_authenticity_token , :only => [:save]
  def layout_with_mercury
    # if we're not already within mercury, and the user is able, load the mercury template.
    # otherwise use the default application template.
    !params[:mercury_frame] ? 'mercury' : 'templates'
  end

  def index
    @cv = Cv.find(params[:id]) if params[:id]
    @template = Template.find(params[:template_id])
#    render :text=>request.as_json and return
    render "#{Rails.root.join("public","templates",@template.title.to_s,@template.title.to_s)}", :layout=>layout_with_mercury
  end
  def show
    @cv = Cv.find(params[:id]) if params[:id]
    @template = Template.find(params[:template_id])
    render "#{Rails.root.join("public","templates",@template.title.to_s,@template.title.to_s)}"
  end
  def pdf_crowd
    if current_student
      cv = Cv.find(params[:cv_id])
      if cv.student = current_student
          require 'pdfcrowd'
          begin
              # create an API client instance
              client = Pdfcrowd::Client.new("thamizh", "7e2fe513e6b24ec3f00e32d1965ddd17")

              # convert a web page and store the generated PDF into a pdf variable
              client.usePrintMedia(true)
              port = request.env["SERVER_SOFTWARE"].to_s.include?("WEBrick") ? ":#{request.port.to_s}" : ""
              resume_url= "http://#{request.host}#{port}/show/#{params[:template_id]}/#{params[:cv_id]}"
              puts resume_url
              pdf = client.convertURI(resume_url)
              send_data(pdf, 
                  :filename => "resume.pdf",
                  :type => "application/pdf",
                  :disposition => "attachment")
              # convert an HTML string and save the result to a file
          rescue Pdfcrowd::Error => why
              print 'FAILED: ', why
              render :text=> "Error occured during conversion of pdf"
          end
      else
        render :text=> "You Dont have access to download this resume"
      end
    end
  end

  def save
    student=current_student
    if student
      template = Template.find(params[:template_id])
      if params[:id]
        cv = Cv.find(params[:id])
        cv.update_attributes(params[:cv].permit(:content,:canvas_data))
      else
        cv = Cv.create(params[:cv].permit(:content,:canvas_data))
        cv.template=template
        cv.student = student
        cv.save
      end
    end
    render :json => cv.id
  end
end
