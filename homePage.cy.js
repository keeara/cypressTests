//function to search for button with string and click it
function search(element) {
  cy.get(".chakra-button").each(($el, index) => {
    
    const buttonEl = $el.text().trim().toLowerCase();

    if (buttonEl === element) {
     cy.wrap($el).click({ force: true });
      return false; // This breaks the `.each()` loop after the first match
    }
  });
}

//new command to press tab(x-times)
    Cypress.Commands.add("pressTab", (times) => {
      for (let i = 0; i < times; i++) {
        cy.realPress("Tab");
      }
    });

describe("Test Homepage", () => {
  it("Select a range of dates and click on the search button", () => {
    cy.visit("https://booking.praiadeiborghi.it/");

    //take the div =>take the first child '0' => click on it
    cy.get('div[class="css-1qphywx"]')
      .find("div")
      .eq(0)
      .click({ force: true })
      .wait(2000);
        search("21");

    //take the div =>take the last child '2' => click on it
    cy.get('div[class="css-1qphywx"]')
      .find("div")
      .eq(2)
      .click({ force: true });

    //press tab 5 times to select the icon  and space to click it twice
    cy.pressTab(5)
      .realPress("Space")
      .realPress("Space");
        search("cerca");

    // cy.get('img[alt="Praia dei Borghi"]')

  });
});
