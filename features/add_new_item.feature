Feature: Add new item

  Scenario: Having a new item input field

    Given I'm on the homepage
    Then I see the new item input field

  Scenario: Submitting a new item

    Given I'm on the homepage
    And there is a 0 items long list
    When I add a new item
    Then there is a 1 items long list
    And the #1 items text is Testing