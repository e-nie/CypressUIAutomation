import {ContactData} from "../../interface/interface";
import {validSubmission, invalidEmail} from '../fixtures/contact-us.json'

//with alias - loading fixture before each test in a hook using this()
describe('FIXTURES/0', () => {
    beforeEach(() => {
        cy.fixture('contact-us.json').as('data')
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    })
    it('should submit the form successfully with valid data', function () {
        const testData: ContactData = this.data
        if (testData.validSubmission) {
            cy.get('[name="first_name"]').type(testData.validSubmission.firstName)
            cy.get('[name="last_name"]').type(testData.validSubmission.lastName)
            cy.get('[name="email"]').type(testData.validSubmission.email)
            cy.get('[name="message"]').type(testData.validSubmission.message)
            cy.get('input[value="SUBMIT"]').click()
            cy.get('h1').should('contain', 'Thank You for your Message!')
        }
    })
    it('should show error with invalid email', function () {
        const testData: ContactData = this.data

        cy.get('[name="first_name"]').type(testData.invalidEmail.firstName)
        cy.get('[name="last_name"]').type(testData.invalidEmail.lastName)
        cy.get('[name="email"]').type(testData.invalidEmail.email)
        cy.get('[name="message"]').type(testData.invalidEmail.message)
        cy.get('input[value="SUBMIT"]').click()
        cy.get('body').should('contain', 'Error: Invalid email address')
    })
})

//with then() - loading fixture before each test

describe('FIXTURES/1', () => {
    beforeEach(() => {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    })
    it('should submit the form', () => {
        cy.fixture('contact-us.json').then((el: ContactData) => {
            if (el.validSubmission) {
                cy.get('[name="first_name"]').type(el.validSubmission.firstName)
                cy.get('[name="last_name"]').type(el.validSubmission.lastName)
                cy.get('[name="email"]').type(el.validSubmission.email)
                cy.get('[name="message"]').type(el.validSubmission.message)
                cy.get('input[value="SUBMIT"]').click()
                cy.get('h1').should('contain', 'Thank You for your Message!')
            }
        })
    })
    it('should show error', function () {
        cy.fixture('contact-us.json').then((el) => {
            if (el.invalidEmail) {
                cy.get('[name="first_name"]').type(el.invalidEmail.firstName)
                cy.get('[name="last_name"]').type(el.invalidEmail.lastName)
                cy.get('[name="email"]').type(el.invalidEmail.email)
                cy.get('[name="message"]').type(el.invalidEmail.message)
                cy.get('input[value="SUBMIT"]').click()
                cy.get('body').should('contain', 'Error: Invalid email address')
            }
        })

    })
})

//importing data from json

describe('FIXTURES/2 using JSON import', () => {
    beforeEach(() => {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    })
    it('should submit the form', () => {
        cy.get('[name="first_name"]').type(validSubmission.firstName)
        cy.get('[name="last_name"]').type(validSubmission.lastName)
        cy.get('[name="email"]').type(validSubmission.email)
        cy.get('[name="message"]').type(validSubmission.message)
        cy.get('input[value="SUBMIT"]').click()
        cy.get('h1').should('contain', 'Thank You for your Message!')
    })

    it('should show error with invalid email', function () {
        cy.get('[name="first_name"]').type(invalidEmail.firstName)
        cy.get('[name="last_name"]').type(invalidEmail.lastName)
        cy.get('[name="email"]').type(invalidEmail.email)
        cy.get('[name="message"]').type(invalidEmail.message)
        cy.get('input[value="SUBMIT"]').click()
        cy.get('body').should('contain', 'Error: Invalid email address')
    })
})

//using env global variables
describe('FIXTURES/2 - using env', () => {
    before(() => {
        cy.fixture('contact-us.json').then(contact => {
            Cypress.env('sale', contact)
        })
    })
    beforeEach(() => {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    })

    it('should submit the form', () => {
        cy.get('[name="first_name"]').type(Cypress.env('sale').validSubmission.firstName)
        cy.get('[name="last_name"]').type(Cypress.env('sale').validSubmission.lastName)
        cy.get('[name="email"]').type(Cypress.env('sale').validSubmission.email)
        cy.get('[name="message"]').type(Cypress.env('sale').validSubmission.message)
        cy.get('input[value="SUBMIT"]').click()
        cy.get('h1').should('contain', 'Thank You for your Message!')
    })

    it.only('should show error for email', ()=> {
        cy.get('[name="first_name"]').type(Cypress.env('sale').invalidEmail.firstName)
        cy.get('[name="last_name"]').type(Cypress.env('sale').invalidEmail.lastName)
        cy.get('[name="email"]').type(Cypress.env('sale').invalidEmail.email)
        cy.get('[name="message"]').type(Cypress.env('sale').invalidEmail.message)
        cy.get('input[value="SUBMIT"]').click()
        cy.get('body').should('contain', 'Error: Invalid email address')
    })
})
