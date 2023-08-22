
Cypress.Commands.add('openMenu', () => {
    cy.get('#nav-main').contains('Todos').click();
    cy.get('#hmenu-content').should('be.visible')
});

Cypress.Commands.add('clickMenuOption', (menuOption) => {
    cy.get('#nav-main').contains('Todos').click({force:true});
    cy.get('.hmenu-item', {timeout:2000}).contains(menuOption).click()
    cy.contains(menuOption).should('be.visible')
});
