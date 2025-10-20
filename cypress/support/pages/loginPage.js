class LoginPage {
  visit() {
    cy.visit("/");
  }

  openLoginForm() {
    cy.get('[data-qa="login_btn"]').should("be.visible").click();
  }

  login(username, password) {
    cy.get('[data-qa="email"]').type(username);
    cy.get('[data-qa="login_password"]').type(password);
    cy.get('[data-qa="login_submit_btn"]').click();
  }

  verifyLoginSuccess() {
    cy.get('[data-qa="buy_coins"]').should("be.visible");
  }
}

export default new LoginPage();
