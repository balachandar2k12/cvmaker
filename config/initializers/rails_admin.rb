
RailsAdmin.config do |config|
 require 'paperclip'
config.current_user_method { current_college } #auto-generated
# config.excluded_models = ["Template", "Cv"]
# config.included_models = ["College", "CollegeSetting","Subscription"]#,"Template","Cv"]
  if defined?(::Paperclip)
  module RailsAdmin::Config::Fields::Types
    # Field type that supports Paperclip file uploads
    class PaperclipFile < RailsAdmin::Config::Fields::Types::FileUpload
    end
    # Register field type to the types registry
    register(:paperclip_file, PaperclipFile)
  end
  module RailsAdmin::Config::Fields
    # Register a custom field factory
    RailsAdmin::Config::Fields.register_factory do |parent, properties, fields|
      paperclip_columns = [:file_name, :content_type, :file_size, :updated_at]
      model = parent.abstract_model.model
      if model.kind_of?(Paperclip::ClassMethods)
      	attachment_name = "resume"
        if part = paperclip_columns.detect {|it| properties[:name] =~ /^(.+)_#{it}$/ }
          attachment_name = properties[:name].to_s.scan(/^(.+)_#{part}$/).first.first.to_sym
         # if model.attachment_definitions.has_key?(attachment_name) && fields.find{|f| attachment_name == f.name}.nil?
            paperclip_columns.each do |it|
              props = parent.abstract_model.properties.find {|p| "#{attachment_name}_#{it}" == p[:name].to_s }
              RailsAdmin::Config::Fields.default_factory.call(parent, props, fields)
              fields.last.hide
            end
            fields << RailsAdmin::Config::Fields::Types.load(:paperclip_file).new(parent, attachment_name, properties)
            true
         # end
        end
      else
        false
      end
    end
  end
end
end
