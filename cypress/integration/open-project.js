describe("new project creation", () => {
  beforeEach(() => {
    cy.login();
  })
  it("create new project with all defaults and delete it", () => {
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
    //logout
    cy.get('.right-nav-button > .ng-binding').click();
    cy.get('.dropdown-menu > :nth-child(5) > .pointer').click();
  });
});
