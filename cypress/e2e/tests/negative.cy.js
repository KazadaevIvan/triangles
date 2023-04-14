describe('Negative tests', () => {
    beforeEach('Open home page', () => {
      cy.visit(Cypress.config('baseUrl'));
    });
  
    it('Should print error when first side is missing', () => {
      cy.get('#side2').type(4);
      cy.get('#side3').type(3);
      cy.get('#identify-triangle-action').click();
      cy.get('#triangle-type').should('have.text', 'Error: Side 1 is missing');
    });
  
    it('Should print error when second side is missing', () => {
      cy.get('#side1').type(4);
      cy.get('#side3').type(3);
      cy.get('#identify-triangle-action').click();
      cy.get('#triangle-type').should('have.text', 'Error: Side 2 is missing');
    });
  
    it('Should print error when third side is missing', () => {
      cy.get('#side1').type(4);
      cy.get('#side2').type(3);
      cy.get('#identify-triangle-action').click();
      cy.get('#triangle-type').should('have.text', 'Error: Side 3 is missing');
    });
  
    it('Should print error when sum of the length of two sides is not greater than the length of the third side', () => {
        cy.get('#side1').type(4);
        cy.get('#side2').type(3);
        cy.get('#side3').type(8);
        cy.get('#identify-triangle-action').click();
        cy.get('#triangle-type').should('have.text', 'Error: Not a Triangle');
      });
});
  