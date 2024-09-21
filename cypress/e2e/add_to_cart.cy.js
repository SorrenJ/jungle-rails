describe('Add to Cart Feature', () => {
  it('should increase cart count by one when a product is added', () => {
      // Visit the home page
      cy.visit('/');
      
      // Print body HTML to console
      cy.get('body').then((body) => {
          console.log(body.html());
      });

      // Get initial cart count
      cy.get('a.nav-link[href="/cart"]').invoke('text').then((initialText) => {
          const initialCount = parseInt(initialText.match(/\d+/)[0], 10);
          expect(initialCount).to.be.a('number');

          // Locate and click the first 'Add to Cart' button using a more generic selector
          cy.get('.products .button_to .btn').first().click();  // Clicks the first "Add to Cart" button

          // Wait for the cart count to be updated
          cy.wait(500);  // Adjust timing if needed

          // Get the new cart count
          cy.get('a.nav-link[href="/cart"]').invoke('text').then((newText) => {
              const newCount = parseInt(newText.match(/\d+/)[0], 10);
              expect(newCount).to.equal(initialCount + 1);
          });
      });
  });
});