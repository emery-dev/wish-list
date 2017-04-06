# This file is used by Rack-based servers to start the application.

set :database, "postgres://localhost/my_database_development"
require_relative 'config/environment'

run Rails.application
