Feature: Returns go to stock

As a store owner
In order to keep track of stock
I want to add items back to stock when they're returned.

Scenario: Refunded items should be returned to stock
	Given that a customer previously bought a black sweater from me
	And I have three black sweaters in stock.
	When he returns the black sweater for a refund
	Then I should have four black sweaters in stock.
