class RegistrationPage {
  visit() {
    cy.visit("/");
  }

  openRegistrationForm() {
    cy.get('[data-qa="signup_btn"]').should("be.visible").click();
  }

  fillForm(username, email, password) {
    cy.get('[data-qa="signup_username"]').type(username);
    cy.get('[data-qa="signup_email"]').type(email);
    cy.get('[data-qa="signup_password"]').type(password);
  }

  submitInitial() {
    cy.get('[data-qa="signup_submit_btn"]').click();
  }

  scrollTermsToBottom() {
    cy.get('[data-qa="terms-and-conditions"]')
      .should("be.visible")
      .scrollTo("bottom", { duration: 500 });
  }

  acceptTerms() {
    cy.get('[data-qa="signup_checkbox"]')
      .should("be.visible")
      .click({ force: true });
  }

  submitFinal() {
    cy.get('[data-qa="signup_submit_btn"]').click();
  }

  registerNewUser(username, email, password) {
    this.visit();
    this.openRegistrationForm();
    this.fillForm(username, email, password);
    this.submitInitial();
    this.scrollTermsToBottom();
    this.acceptTerms();
    this.submitFinal();
  }
}

export default new RegistrationPage();
