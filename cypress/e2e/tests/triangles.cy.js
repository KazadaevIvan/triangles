const data = require ('../../fixtures/triangles.json');

describe('DDT Triangles app', () => {
  beforeEach('Open home page', () => {
    cy.visit(Cypress.config('baseUrl'));
  });

  data.forEach(data => {
    it(data.name, () => {
      cy.get('#side1').type(data.firstSide);
      cy.get('#side2').type(data.secondSide);
      cy.get('#side3').type(data.thirdSide);
      cy.get('#identify-triangle-action').click();
      cy.get('#triangle-type').should('have.text', data.expectedMessage);
    });
  });
});
