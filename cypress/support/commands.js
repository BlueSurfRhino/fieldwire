Cypress.Commands.add('login', () => {
    cy.visit("https://app.fieldwire.com/"); 
    cy.get("#email-input").type(Cypress.env('user_name'));
    cy.get(".btn").click();
    cy.get("#password-input").type(Cypress.env('user_password'));
    cy.get(".btn").click();
});
