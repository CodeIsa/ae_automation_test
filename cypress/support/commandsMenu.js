Cypress.Commands.add("openMenu", () => {
  cy.get("#nav-main").contains("Todos").click();
  cy.get("#hmenu-content").should("be.visible");
});

Cypress.Commands.add("clickMenuOption", (menuOption) => {
  cy.get("#nav-main").contains("Todos").click({ force: true });
  cy.get("#hmenu-content>ul>li>a.hmenu-item", { timeout: 5000 })
    .contains(menuOption)
    .click();
  cy.contains(menuOption).should("be.visible");
});
