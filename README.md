# cy-data-test

This is a sample project I developed during a course to demonstrate the creation and use of a custom command in Cypress called `cy.dataTest`.

## Pre-requirements

It is required to have Node.js and npm installed to run this project.

> I used versions `v22.12.0` and `10.9.0` of Node.js and npm, respectively. I suggest you use the same or later versions.

## Installation

Run `npm install` (or `npm i` for the short version) to install the dev dependencies.

## Tests

> **Note:** Before running the tests, make a copy of the `cypress.env.example.json` file as `cypress.env.json`, which in the real world, you would update with valid credentials.
>
> The `cypress.env.json` file is included on [`.gitignore`](./.gitignore) and you're safe that confidential info won't be versioned.

Run `npm test` (or `npm t` for the short version) to run the test in headless mode.

Or, run `npm run cy:open` to open Cypress in interactive mode.
___

This project was developed by me, Savio Holanda, inspired by the course taught by [Walmyr]. (https://walmyr.dev).