Feature: Purchase Functionality
  As a customer
  In order to verify the purchase 
  So that the purchase to be completed successfully

Background: Opencart Page
Given I go to the web page

  Scenario: Purchase Test
    Given I see the title page
    When I add two productos to the cart
    And I go to cart page
    And I complete the checkout
    Then I successfully complete the purchase
