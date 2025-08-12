Feature: Checkout flow on SauceDemo

  Scenario: User selects 3 random items and completes checkout
    Given I open the inventory page
    And I login with username "standard_user" and password "secret_sauce"
    When I add 3 random items to the cart
    Then the cart badge should show "3"
    When I proceed to checkout with "Nadia" "Ghulam" "00000"
    Then I should see the order complete message
