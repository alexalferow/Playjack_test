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
    cy.get('[data-qa="terms-and-conditions"]').should("be.visible");

    cy.window().then((win) => {
      const el =
        win.document.querySelector(".RegistrationModal_termsWrap__t8wal") ||
        win.document.querySelector(".RegistrationModal_termsContent___ViRI");
      if (!el) return;

      const step = 200;
      const totalSteps = Math.ceil(el.scrollHeight / step);
      let i = 0;

      const interval = setInterval(() => {
        el.scrollTop += step;
        el.dispatchEvent(new win.Event("scroll"));
        el.dispatchEvent(new win.WheelEvent("wheel", { deltaY: step }));
        if (++i >= totalSteps) clearInterval(interval);
      }, 100);
    });

    cy.wait(20000); // wait long enough for UI to unlock checkbox
  }

  acceptTerms() {
    cy.get('[data-qa="signup_checkbox"]').click({ force: true });
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
