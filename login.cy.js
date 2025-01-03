////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Cypress.Commands.add("pressTab", (times) => {
  for (let i = 0; i < times; i++) {
    cy.realPress("Tab");
  }
});

Cypress.Commands.add("pressSpace", (times) => {
  for (let i = 0; i < times; i++) {
    cy.realPress("Space");
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

describe("Scenario#1: Login AMT", () => {
  it("Should perform login with incorrect(fake domain) email", () => {
    cy.visit("https://cloud.amtdev.it/famiglia");

    cy.contains("La mia area")
    .click({force:true});

    cy.wait(2000);

    cy.get("#email")
    .type("x.+2@1.ix");

    cy.contains("Accedi o Registrati")
    .click({force:true});

    cy.wait(1000);

    cy.get('h1')
      .eq(2)
      .should("have.text", " Controlla la tua email");

    cy.get('p')
    .eq(0)
    .should('have.text', "Per completare l'accesso, controlla la tua email e clicca sul link\n        presente in essa");
  });
});

describe("Scenario#2: Login AMT", () => {
  it("Should perform login with numbers only", () => {
    cy.visit("https://cloud.amtdev.it/famiglia");

    cy.contains("La mia area")
    .click({ force: true });

    cy.wait(2000);

    cy.get("#email")
    .click({ force: true })
    .type("12345");

    cy.findAllByText("Accedi o Registrati")
    .click();
  });
});

describe("Scenario#2: Login AMT", () => {
  it("Should perform login with blank space", () => {
    cy.visit("https://cloud.amtdev.it/famiglia");

    cy.contains("La mia area")
    .click({ force: true })

    cy.wait(2000)

    cy.get("#email")
    .click({ force: true })

    cy.pressSpace(5)
    
    cy.findAllByText("Accedi o Registrati")
    .click();
    
  });
});