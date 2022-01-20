describe("The Home Page", () => {
  it("successful login", () => {
    cy.visit("https://app.fieldwire.com/"); 
    cy.get("#email-input").type("richowens@outlook.com");
    cy.get(".btn").click();
    cy.get("#password-input").type("WB22uG*Dt.3c?5Q");
    cy.get(".btn").click();
  });
  it("new project creation - no content", () => {
    //create project
    cy.get(".new-project").click();
    cy.get('[name="name"]').type("Test");
    cy.get('[name="code"]').type("Test");
    cy.get('[type="submit"]').click();
    cy.get(".modal-footer > .btn").click();
    cy.get(".next-btn").click();
    cy.get(".next-btn").click();
    cy.get(".next-btn").click();
    //navigate to home to verify project creation
    cy.get('.hidden-lg').click();
    cy.get('.nav-icon').click();
    cy.get('.truncate > .ng-scope').click();
    //verify the project we created exists
    cy.get('[data-e2e="Test-cog"]').invoke('show').click({ force: true });
    //delete our project
    cy.get('[ng-click="$ctrl.remove()"]').click();
    cy.get('form.ng-pristine > .form-control').type("Test");
    cy.get('[ng-disabled="!enabled()"]').click();
  });
});
