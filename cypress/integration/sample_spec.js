describe("The Home Page", () => {
  it("successful login", () => {
    cy.visit("https://app.fieldwire.com/"); // change URL to match your dev URL
    cy.get("#email-input").type("richowens@outlook.com");
    cy.get(".btn").click();
    cy.get("#password-input").type("WB22uG*Dt.3c?5Q");
    cy.get(".btn").click();
  });

  it("new project creation", () => {
    cy.get(".new-project").click();
    cy.get('[name="name"]').type("Test");
    cy.get('[name="code"]').type("Test");
    cy.get('[type="submit"]').click();
    //cy.get('[data-test-id="test-example"]')
  });
});
