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

Given(/^that I am a student visiting the mobile app$/) do
  visit('http://localhost:8003/Users/athers01/Sites/tdd/sample.html')
end

When(/^I view the welcome page$/) do
  expect(page).to have_title "UOB Student App"
end

Then(/^I should be greeted$/) do
  expect(page).to have_content 'Welcome to the App'
end

Then(/^be able to to attempt a log in$/) do
	within('form#app-logon') do
		page.should have_css('input#app-logon-name')
		page.should have_css('input#app-logon-password')
		page.should have_css('input#app-logon-submit')
	end
end

@javascript
Given(/^I am registered$/) do
  @user = 'steven atherton'
  @password = 'flibberty'
end

When(/^I log in with my user name and password$/) do
  fill_in 'app-logon-name', with: @user
  fill_in 'app-logon-password', with: @password
  click_on 'Enter'
end

Then(/^I should recieve a personal greeting$/) do
  expect(page).to have_content 'Hello steven atherton'
end