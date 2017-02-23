require 'httparty'
require 'capybara'
require 'capybara/cucumber'
require 'capybara/poltergeist'
require 'capybara/rspec'

Capybara.configure do |config|
  config.app = "TDD App"
  config.run_server = false
  config.default_driver = :poltergeist
end
