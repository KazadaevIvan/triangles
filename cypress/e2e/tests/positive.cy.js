describe('Positive tests', () => {
  beforeEach('Open home page', () => {
    cy.visit(Cypress.config('baseUrl'));
  });

  it('Should say triangle is Equilateral when all three sides are equal', () => {
    cy.get('#side1').type(4);
    cy.get('#side2').type(4);
    cy.get('#side3').type(4);
    cy.get('#identify-triangle-action').click();
    cy.get('#triangle-type').should('have.text', 'Equilateral');
  });

  it('Should say triangle is Isosceles when two sides are equal', () => {
    cy.get('#side1').type(4);
    cy.get('#side2').type(4);
    cy.get('#side3').type(3);
    cy.get('#identify-triangle-action').click();
    cy.get('#triangle-type').should('have.text', 'Isosceles');
  });

  it('Should say triangle is Scalene when no sides are equal', () => {
    cy.get('#side1').type(4);
    cy.get('#side2').type(3);
    cy.get('#side3').type(2);
    cy.get('#identify-triangle-action').click();
    cy.get('#triangle-type').should('have.text', 'Scalene');
  });
});
