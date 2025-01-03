describe("Cookie Acceptance Flow", () => {
  it(
    "Clicks the refuse cookies button and queries for Cypress",
    () => {
      cy.visit("https://google.com");

      // Refus cookies banner from button (must scroll down to set visibility)
      cy.get("button")
        .contains("Rifiuta tutto")
        .scrollIntoView()
        .click({ force: true });

      //query to search Cypress and assert as first element to see 'Cypress'
      cy.get(".gLFyf").type("cypress{enter}");
      cy.get("h3").should("contain", "Cypress");
    }
  );
});
