// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

//
// -- This is a child command -
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })

//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })

Cypress.Commands.add('getElement', { prevSubject: ['optional', 'element'] }, (subject, locator, options) => {
    if (subject) {
        if (options && options.by == 'xpath') {
            cy.log(options.by);
            return cy.wrap(subject).xpath(locator, options);
        } else {
            return cy.wrap(subject).find(locator, options);
        }
    } else {
        if (options && options.by == 'xpath') {
            return cy.xpath(locator, options);
        } else {
            return cy.get(locator, options);
        }
    }
});

//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
