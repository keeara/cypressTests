function getButton(searchElement) {                   //=>func to get the button element easily by text
  cy.get(".chakra-button").each(($el) => {
    //get class element
    const buttonEl = $el.text().trim().toLowerCase();
    if (buttonEl === searchElement) {
      // Check if the text matches your desired string
      cy.wrap($el).click();
    }
  });
}

describe("Scenario#1: Login", () => {
  it("Should login with incorrect data", () => {
    cy.visit("https://booking.praiadeiborghi.it/");
    
    getButton("accedi");
    cy.wait(2000);
    cy.get("#password").type("provaprovaprova");
    getButton("accedi");
  });
});

describe("Scenario#2: Login", () => {
  it("Should login with empty data", () => {
    cy.visit("https://booking.praiadeiborghi.it/");

    getButton("accedi");
    cy.wait(2000);
    cy.get("#email").type(" ");
    cy.get("#password").type(" ");
    getButton("accedi");
  });
});

describe("Scenario#3: Login", () => {
  it("Should login with correct data", () => {
    cy.visit("https://booking.praiadeiborghi.it/");

    getButton("accedi");
    cy.wait(2000);
    cy.get("#email").type("nodaped891@bawsny.com");
    cy.get("#password").type("AbacoAbaco123,");
    getButton("accedi");
    cy.wait(2000);
    cy.url().should("eq", "https://booking.praiadeiborghi.it/");
    cy.wait(1000);
    cy.get("#menu-button-\\:r1\\:").should("contain", "Il mio profilo"); // \\because : is a special character in regex
  });
});

describe("Scenario#4: Login", () => {
  it("Should login with correct username but incorrect password", () => {
    cy.visit("https://booking.praiadeiborghi.it/");

    getButton("accedi");
    cy.wait(2000);
    cy.get("#email").type("nodaped891@bawsny.com");
    cy.get("#password").type(",");
    getButton("accedi");
    cy.wait(2000);
    cy.url().should(
      "eq",
      "https://booking.praiadeiborghi.it/api/auth/error?error=Invalid%20password");
    cy.get("h1").should("contain", "Error");
    cy.get("p").should("contain", "booking.praiadeiborghi.it");
    
  });
});