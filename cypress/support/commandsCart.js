Cypress.Commands.add('addProductToCart', (productId) => {
    cy.visit(`/Smartphone-INFINIX-HOT-20-5G/${productId}`);
    cy.get('#add-to-cart-button').click();
    cy.get('#attachSiNoCoverage').click()
    cy.get('#sw-atc-confirmation').contains('Adicionado ao carrinho');
});

Cypress.Commands.add('removeProductToCart', () => {
    cy.get('#nav-cart').first().click();
    //cy.get('[data-action="delete"]').click({ multiple: true })
    // Verify that the product is removed from the cart
    cy.get('Active Items').should('have.length', 0); // Adjust the expected length accordingly
});

Cypress.Commands.add('proceedToCheckout', () => {
    cy.get('#sw-gtc').click();
    cy.get('.sc-cart-header').should('contain', 'Carrinho de compras')
    cy.get('#desktop-ptc-button-celWidget').click()
});
