🎭 Playwright + TypeScript Template

>A reusable end-to-end testing template built with Playwright and TypeScript.
>This repository is intended to be used as a starting point for UI automation projects with a clean structure and best practices in mind.


✨ Features:

  >⚡ Playwright Test Runner
  >
  >🟦 TypeScript for type safety
  >
  >🌍 Cross-browser testing (Chromium, Firefox, WebKit)
  >
  >🧪 Parallel execution
  >
  >📊 Built-in HTML reports
  >
  >🧩 Page Object Model (POM) friendly
  >
  >🔁 Ready for CI/CD pipelines


📦 Tech Stack:

  - Playwright
  - TypeScript
  - Node.js (v18 or higher recommended)


🛠️ Getting Started

>1️⃣ Clone the repository
>
>  `git clone https://github.com/estebanguti/template-playwright-ts.git
>  cd template-playwright-ts`
>
>2️⃣ Install dependencies
>
>  `npm install`
>
>3️⃣ Install Playwright browsers
>
>  `npx playwright install`


▶️ Running Tests

>Run all tests
>  
> `npx playwright test`
> 
>Run tests in headed mode
> 
> `npx playwright test --headed`
  
>Run tests in a specific browser
> 
> `npx playwright test --project=chromium`
> 
>Run a specific test file
> 
> `npx playwright test tests/login.spec.ts`


📊 Test Reports

>After test execution, open the Playwright HTML report:
>
>`npx playwright show-report`
