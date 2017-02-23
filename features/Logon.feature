Feature: Logon

As a student
In order to take part in Welcome week activities
I want to be able to log on to the mobile app.

Scenario: Student is able to log on to mobile app
	Given that I am a student visiting the mobile app
	When I view the welcome page
	Then I should be greeted
	And be able to to attempt a log in

Scenario: Student is registered
	Given that I am a student visiting the mobile app
	And I am registered
	When I log in with my user name and password
	Then I should recieve a personal greeting
