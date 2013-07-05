CvBuilder::Application.routes.draw do
    namespace :mercury do
      resources :images
    end
  mount Mercury::Engine => '/'
  root to: 'home#index'
  devise_for :colleges
  get "/get_pdf" , :to =>"templates#pdf_crowd"
  post "/save_template/:template_id", :to => "templates#save"
  get "/colleges/add_student", :to => "colleges#add_student", :as => 'add_student'
  post "/colleges/add_student", :to => "colleges#create_student", :as => 'create_student'
  get "/colleges/default_password", :to => "colleges#new_default_password", :as => 'new_default_password'
  post "/colleges/default_password", :to => "colleges#create_default_password", :as => 'create_default_password'
  get "/colleges", to: "colleges#index"
  get "/students/login", to: "students#new_login", :as => 'student_new_login'
  post "/students/login", to: "students#create_login", :as => 'student_create_login' 
  get  "/students", to: "students#index", :as => 'students' 
  delete "/students/logout", to: "students#logout", :as => 'student_logout'

  get "/template/:template_id(/:id)", to: "templates#index"
    get "/show/:template_id(/:id)", to: "templates#show"
  get "/colleges/import", to: "colleges#new_import", :as => 'new_import'
  post "/colleges/import", to: "colleges#create_import", :as => 'create_import'
  get "/colleges/subscription", to: "colleges#new_subscription", :as => 'new_subscription'
  post "/colleges/subscription", to: "colleges#create_subscription", :as => 'create_subscription'
  get  "/students/pdf", to: "students#create_pdf", :as => 'create_pdf'


  get "/*" , to: "home#index", :as =>"universal"
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'  
  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end
  
  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
