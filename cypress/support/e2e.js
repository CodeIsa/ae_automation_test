import "./commands";
import "./commandsSearch";
import "./commandsCart";
import "./commandsMenu";

Cypress.on("uncaught:exception", (err, runnable) => {
  // Prevent Cypress from failing the test
  return false;
});
