DeliveryApp::Application.routes.draw do

  root :to => "application#index"
  match "static", :to => "application#static", via: [:get]

end
