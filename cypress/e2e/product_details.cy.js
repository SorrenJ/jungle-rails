describe('Product Details Navigation', () => {
    beforeEach(() => {
      cy.visit('/');
    });
    it('can navigate from the home page to the product detail page by clicking on a product', () => {
      cy.get('.products article').first().find('a').click();
      cy.url().should('include', '/products/');
      cy.get('h1').should('be.visible');
    });
  });