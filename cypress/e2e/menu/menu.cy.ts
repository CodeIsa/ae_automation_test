describe('Navigate on menu', () => {

    it('should allow users to navigate between options', () => {
        cy.visit('/');

        cy.addProductToCart('dp/B0C2RFBJDQ')
        cy.proceedToCheckout()


    });
});



nav-hamburger-menu