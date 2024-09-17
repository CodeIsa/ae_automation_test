declare namespace Cypress {
  interface Chainable {
    //CommandsCart
    addProductToCart(productId: string): Chainable<void>;
    removeProductToCart(): Chainable<void>;
    proceedToCheckout(): Chainable<void>;

    //CommandsMenu
    openMenu(): Chainable<void>;
    clickMenuOption(menuOption: string): Chainable<void>;

    //CommandsSearch
    searchAndVerify(
      searchTerm: string,
      expectedResults: string
    ): Chainable<void>;
    clickCategoryBooksAndVerifyURL(expectedURL: string): Chainable<void>;
    clickCategoryMusicAndVerifyURL(expectedURL: string): Chainable<void>;
    clickCategoryGiftAndVerifyURL(expectedURL: string): Chainable<void>;
    clickCategoryEletronicsAndVerifyURL(expectedURL: string): Chainable<void>;
    clickCategoryComputerAndVerifyURL(expectedURL: string): Chainable<void>;
  }
}
