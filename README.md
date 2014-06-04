## Getting Started
You need to have `grunt-cli` and `karma-cli` packages installed in your system. If you haven't, install them running `npm install --global grunt-cli karma-cli` in your shell (you will need an administrator permissions). Then run `npm install` to install dependencies.

## Main Tasks
  - `grunt build` compiles assets to the `public/assets` directory.
  - `grunt watch` watches assets and automatically recompiles them when they change.
  - `grunt connect` launches the development server at `http://localhost:8000`. If you use it together with previous task, the page is refreshed automatically.

## Running Tests
  - `npm test` runs the code analysis and tests. Coverage reports will be placed in the `coverage_reports` directory.

## Assets Organization
Assets can be placed in one of three locations:
  - `app/assets` is for assets that are owned by the application, such as custom images, JavaScript files or stylesheets.
  - `lib/assets` is for your own libraries' code that doesn't really fit into the scope of the application or those libraries which are shared across applications.
  - `vendor/assets` is for assets that are owned by outside entities, such as code for JavaScript plugins and CSS frameworks.
