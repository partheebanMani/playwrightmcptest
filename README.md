
# playwrightmcptest

This project is a Playwright end-to-end testing suite for the CERN shop website, created using the Playwright MCP server and JavaScript/TypeScript.

## Project Structure
- `tests/` - Contains all Playwright test files and page objects
- `playwright.config.js` - Playwright configuration file
- `package.json` - Project dependencies and scripts

## How to Install and Run

1. Install dependencies:
	```sh
	npm install
	```

2. Run all tests:
	```sh
	npx playwright test
	```

3. Run tests in headed mode (browser visible):
	```sh
	npm run test:headed
	```

4. Run a specific test file:
	```sh
	npx playwright test tests/cern-shop-postcard.spec.ts
	```

## Notes
- Ensure you have Node.js (v18+) installed.
- Test results and reports are generated in `/test-results` and `/playwright-report`.
- The project uses TypeScript for page objects and test files.

## Repository
[GitHub Repository](https://github.com/partheebanMani/playwrightmcptest)
