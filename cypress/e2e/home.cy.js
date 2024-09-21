describe('Home Page', () => {
    it("visits the home page", () => {
        cy.visit("/");
      });
      
    it("There is 4 products on the page", () => {
      cy.visit("/");
      cy.get(".products article").should("have.length", 4);
    });
  });
  