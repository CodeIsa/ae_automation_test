describe("Adding Products to Cart and Checkout", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should allow users to add products to the cart and start checkout", () => {
    cy.addProductToCart("dp/B0C2RFBJDQ");
    cy.proceedToCheckout();
  });

  it("should remove a product from the cart", () => {
    cy.addProductToCart("dp/B0C2RFBJDQ");
    cy.removeProductToCart();
  });
});
