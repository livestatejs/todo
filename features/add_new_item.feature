Feature: Add new item

  Scenario: Having a new item input field

    Given I'm on the homepage
    Then I see the new item input field

  Scenario Outline: Submitting a new item

    Given I'm on the homepage
    And there is a <initial_length> items long list
    When I add a new item with a title <title>
    Then there is a <length> items long list
    And the #<position> items text is <title>

    Examples:

      | initial_length | title        | length | position |
      | 0              | Testing      | 1      | 1        |
      | 0              | 12345        | 1      | 1        |