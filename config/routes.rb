# frozen_string_literal: true

Rails.application.routes.draw do
  resources :greetings, only: [:index]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")   get '*path', to: 'static#index'
  root 'root#index'
  get '*path', to: 'root#index'
end
