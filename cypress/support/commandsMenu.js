Cypress.Commands.add('openMenu', () => {
  cy.contains('Todos').click({ force: true });
  //cy.get('#hmenu-content').should('be.visible');
});

Cypress.Commands.add('clickMenuOption', (menuOption) => {
  cy.get('#nav-main')
    .contains('Todos')
    .and('be.visible')
    .click({ force: true });
  cy.contains(menuOption).click();
  cy.contains(menuOption).should('be.visible');
});
