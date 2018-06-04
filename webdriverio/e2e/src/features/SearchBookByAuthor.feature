@Bookstore-1
Feature: Search a book by the author

  Scenario Outline:Search a book by author and display details
    Given I open the url "localhost:3000"
    Then I expect that element "author textbox" is visible
    Then I expect that element "getbook button" is visible
    When I set "<author>" to the inputfield "author textbox"
    And I click on the element "getbook button"
    And I sleep for 2 seconds
    Then I expect that element "Title label" is visible
    And I expect that element "Title Value" matches the text "<title>"
    Then I expect that element "Author label" is visible
    And I expect that element "Author Value" matches the text "<author>"
    Then I expect that element "Publisher label" is visible
    And I expect that element "Publisher Value" matches the text "<publisher>"
    Then I expect that element "Genre label" is visible
    And I expect that element "Genre Value" matches the text "<genre>"
    Then I expect that element "Pages label" is visible
    And I expect that element "Pages Value" matches the text "<pages>"
    Then I expect that element "Sale Index label" is visible
    And I expect that element "Sale Index Value" matches the text "<sale_index>"

    @SITJ
    Examples:
      | skip  | reason | title                | author         | publisher    | genre    | pages | sale_index |
      | false |        | Norse Mythology      | Neil Gaiman    | Norton Co    | Drama    | 304   | 5          |
      | false |        | Lincoln In The Bardo | Goerge Sanders | Random House | Suspense | 368   | 7          |
      | false |        | Norse Mythology      | XYZ            | Norton Co    | Drama    | 304   | 5          |
