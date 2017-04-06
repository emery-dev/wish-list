Rails.application.routes.draw do
  resources :print

  root to: 'site#index'

  namespace :api do
    resources :items, only: [:index, :create, :destroy, :update]
  end
end
