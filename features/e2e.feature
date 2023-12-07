Feature: Purchase Functionality
  As a customer
  In order to verify the purchase 
  So that the purchase to be completed successfully

Background: Purchase Test
Given I go to the web page

  Scenario: Login Functionality with Valid user name and password
    Given I see the title page
    When I add two productos to the cart
    And I go to cart page
