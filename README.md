
# Playjack Cypress Test Project

This project contains end-to-end tests for Playjack using Cypress.

## Structure
- `cypress/e2e/` — Test specs
- `cypress/support/pages/` — Page objects
- `cypress/fixtures/` — Test data
- `cypress/screenshots/` — Test artifacts

## How to Run Tests

```sh
npx cypress open   # Interactive mode
npx cypress run    # Headless mode
npx cypress run --spec "cypress/e2e/login.spec.js" --browser chrome # Run specific test file
```

## Getting Started
1. Install dependencies:
	```sh
	npm install
	```
2. Run tests as shown above.

## Notes
- Update test data in `cypress/fixtures/user.json` as needed.
- Page objects are in `cypress/support/pages/` for maintainability.
