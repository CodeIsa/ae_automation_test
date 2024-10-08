describe('Product search and Browsing', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should allow users to search and browse products', () => {
    cy.searchAndVerify('smartphone', 'smartphone');
    cy.clickCategoryBooksAndVerifyURL('/Livros');
    cy.clickCategoryMusicAndVerifyURL('/music');
    cy.clickCategoryEletronicsAndVerifyURL('/Eletronicos-e-Tecnologia');
  });
});
