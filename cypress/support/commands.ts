/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
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
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }


Cypress.Commands.add('loginATS', (username:string, password:string) => {
        cy.visit('https://automationteststore.com/index.php?rt=account/login')
        cy.get('[id="loginFrm_loginname"]').type(username)
        cy.get('[id="loginFrm_password"]').type(password)
        cy.get('[title="Login"]').click()

    })

Cypress.Commands.add('loginOrange', (username:string, password:string) => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type(username)
        cy.get('input[name="password"]').type(password)
        cy.get('button[type="submit"]').click()
    })

Cypress.Commands.add('loginPASV', (email:string, password:string) => {
        cy.visit('https://coding.pasv.us/user/login')
        cy.get('[id="normal_login_email"]').type(email)
        cy.get('[id="normal_login_password"]').type(password)
        cy.get('[type="submit"]').click()
    })

Cypress.Commands.add('loginTheInternetHeroku', (username:string, password:string) => {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('[id="username"]').type(username)
        cy.get('[id="password"]').type(password)
        cy.get('[type="submit"]').click()
    })

Cypress.Commands.add('loginDemoQA', (username:string, password:string) => {
        cy.visit('https://demoqa.com/login')
        cy.get('[id="userName"]').type(username)
        cy.get('[id="password"]').type(password)
        cy.get('[id="login"]').click()
    })
