describe('Product search and Browsing', () => {

    it('should allow users to search and browse products', () => {
        // Search for a product
        cy.visit('/');

        // Use custom command to search and verify search results
        cy.searchAndVerify('smartphone', 'smartphone');
        cy.clickCategoryBooksAndVerifyURL('/Livros');
        cy.clickCategoryMusicAndVerifyURL('/music');
        cy.clickCategoryGiftAndVerifyURL('/gcx');
        cy.clickCategoryEletronicsAndVerifyURL('/Eletronicos-e-Tecnologia');
        cy.clickCategoryComputerAndVerifyURL('/Computadores-Informatica');


    });

});