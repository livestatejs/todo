Feature: Add new item

  Scenario: Having a new item input field

    Given I'm on the homepage
    Then I see the new item input field

  Scenario: Submitting a new item

    Given I'm on the homepage
    And there is an empty list