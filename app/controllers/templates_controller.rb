class TemplatesController < ApplicationController
  require 'uri'
  layout :layout_with_mercury
  before_action :authenticate
  skip_before_filter :verify_authenticity_token , :only => [:save]
  def layout_with_mercury
    # if we're not already within mercury, and the user is able, load the mercury template.
    # otherwise use the default application template.
    !params[:mercury_frame] ? 'mercury' : 'templates'
  end
  def index
    @cv = Cv.find(params[:id]) if params[:id]
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
