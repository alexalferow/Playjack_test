import LoginPage from "../support/pages/loginPage.js";
import { defaultPassword, defaultUsername } from "../support/commands.js";

describe("Playjack Login", () => {
  it("logs in with valid user", () => {
    const username = defaultUsername;
    const password = defaultPassword;

    LoginPage.visit();
    LoginPage.openLoginForm();
    LoginPage.login(username, password);

    cy.get('[data-qa="buy_coins"]').should("be.visible");
  });
});
