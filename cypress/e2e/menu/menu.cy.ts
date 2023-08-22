describe('Navigate on menu', () => {
    beforeEach(() => {
        cy.visit('/'); 
      });

    it('should allow users to navigate between options', () => {
        cy.openMenu();
        cy.clickMenuOption('Mais Vendidos');
        cy.clickMenuOption('Novidades na Amazon');
        cy.clickMenuOption('Produtos em alta');
    });
});

