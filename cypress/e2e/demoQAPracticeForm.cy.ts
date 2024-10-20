
import {registrationForm} from '../fixtures/contact-us.json'

describe.only('DEMOQA PRACTICE FORM - USING FIXTURES WITH ENV', () => {
    before(()=> {
        cy.fixture('contact-us.json').then(contact=> {
            Cypress.env('student', contact)
        })
    })
    beforeEach(() => {
        cy.visit('https://demoqa.com/automation-practice-form#google_vignette')
    })

    it('should fill in the practice form correctly', () => {
        cy.get('#firstName').type( registrationForm.firstName)
        cy.get('#lastName').type(registrationForm.lastName)
        cy.get('#userEmail').type(registrationForm.userEmail)
        cy.get('[for="gender-radio-2"]').click()
        cy.get('#userNumber').type(registrationForm.userNumber)
        cy.get('#subjectsInput').type(registrationForm.subjects)
        cy.get('#hobbies-checkbox-1').check({force: true})
        cy.get('#hobbies-checkbox-2').check({force: true})

        //Upload Picture
        cy.get('#uploadPicture').attachFile('little-samurais.jpg')

        cy.get('#currentAddress').type( registrationForm.currentAddress)

        //Select State
        cy.get('#state').click()
        cy.get('#state').within(() => {
        cy.get('#react-select-3-option-0').should('be.visible').click()
        cy.get('div[class$="-singleValue"]').should('contain', Cypress.env('student').registrationForm.state)
        })

        // Select State - Natalya's option - 1:
        // cy.contains('Select State').click()
        // cy.get('[id="react-select-3-option-0"]').click()
        // cy.get('[class$="-singleValue"]').should('contain', 'NCR')

        // Select State - Natalya's option - 2:
        // cy.contains('Select State', {timeout: 10000}).should('be.visible').click()
        // cy.get('[tabindex="-1"]').each($el=> {
        //     $el.text() === 'NCR'? cy.wrap($el).click(): null
        // })
        // cy.get('[class$="-singleValue"]').should('contain', 'NCR')

        //Select City
        cy.get('#city').click()
        cy.get('#city').within(() => {
            cy.get('#react-select-4-option-0').should('be.visible').click()
        })
        cy.get('[class$="-singleValue"]').should('contain','Delhi' )
        cy.get('#submit').click()
    })
})
