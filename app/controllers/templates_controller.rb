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
    render :index, :layout=>layout_with_mercury
  end
  def show
    @cv = Cv.find(params[:id]) if params[:id]
    render :index
  end
  def pdf_crowd
    require 'pdfcrowd'
      begin
          # create an API client instance
          client = Pdfcrowd::Client.new("thamizh", "7e2fe513e6b24ec3f00e32d1965ddd17")
          # convert a web page and store the generated PDF into a pdf variable
          pdf = client.convertURI("#{request.host}/show/1/15")
          send_data(pdf, 
              :filename => "resume.pdf",
              :type => "application/pdf",
              :disposition => "attachment")
          # convert an HTML string and save the result to a file
      rescue Pdfcrowd::Error => why
          print 'FAILED: ', why
      end
  end
  def save
    student=current_student
    if student
      template = Template.find(params[:template_id])
      if params[:id]
        cv = Cv.find(params[:id])
      else
        cv = Cv.new()
        cv.template=template
        cv.student = student
      end
      cv.content = params[:content]
      cv.save
    end
    render :json => cv.id
  end
end
