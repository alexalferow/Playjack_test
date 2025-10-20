import RegistrationPage from "../support/pages/registrationPage.js";
import {
  generateUsername,
  generateEmail,
  defaultPassword,
} from "../support/commands.js";

describe("Playjack Registration", () => {
  it("registers a new user", () => {
    const username = generateUsername();
    const email = generateEmail(username);
    const password = defaultPassword;

    RegistrationPage.registerNewUser(username, email, password);
    RegistrationPage.closeBonus();
    RegistrationPage.verifyRegistrationSuccess();
  });
});
