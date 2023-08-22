Cypress.Commands.add('searchAndVerify', (searchTerm, expectedResults) => {
    cy.get('#twotabsearchtextbox').type(searchTerm);
    cy.get('#nav-search-submit-button').click();
    cy.contains(expectedResults).should('be.visible');
});

Cypress.Commands.add('clickCategoryBooksAndVerifyURL', (expectedURL) => {
   cy.get('#nav-main').contains('Livros').click();
   cy.url().should('include', expectedURL);
 });

 Cypress.Commands.add('clickCategoryMusicAndVerifyURL', (expectedURL) => {
  cy.get('#nav-main').contains('Música').click();
  cy.url().should('include', expectedURL);
});

Cypress.Commands.add('clickCategoryGiftAndVerifyURL', (expectedURL) => {
  cy.get('#nav-main').contains('Ideias de Presente').click();
  cy.url().should('include', expectedURL);
});

Cypress.Commands.add('clickCategoryEletronicsAndVerifyURL', (expectedURL) => {
  cy.get('#nav-main').contains('Eletrônicos').click();
  cy.url().should('include', expectedURL);
});

Cypress.Commands.add('clickCategoryComputerAndVerifyURL', (expectedURL) => {
  cy.get('#nav-main').contains('Computadores').click();
  cy.url().should('include', expectedURL);
});
