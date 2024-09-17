Cypress.Commands.add('addProductToCart', (productId) => {
  cy.visit(`/Smartphone-Samsung-Galaxy-A25-256GB/${productId}`);
  cy.get('#add-to-cart-button').click();
  cy.get('#attachSiNoCoverage').click();
  cy.get('#sw-atc-confirmation').contains('Adicionado ao carrinho');
});

Cypress.Commands.add('removeProductToCart', () => {
  cy.get('#nav-cart').first().click();
  cy.get('input[value="Excluir"]').click();
  // Verify that the product is removed from the cart
  cy.get('Active Items').should('have.length', 0);
});

Cypress.Commands.add('proceedToCheckout', () => {
  cy.get('#sw-gtc').click();
  cy.get('.sc-cart-header').should('contain', 'Carrinho de compras');
  cy.get('#desktop-ptc-button-celWidget').click();
});
