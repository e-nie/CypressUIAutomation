describe.only('DEMOQA PRACTICE FORM', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/automation-practice-form#google_vignette')
    })

    it('should fill in the practice form correctly', () => {
        cy.get('#firstName').type('Gottfried')
        cy.get('#lastName').type('Leibniz')
        cy.get('#userEmail').type('test@beispiel.de')
        cy.get('[for="gender-radio-2"]').click()
        cy.get('#userNumber').type('0303986300')
        cy.get('#subjectsInput').type('Finance')
        cy.get('#hobbies-checkbox-1').check({force: true})
        cy.get('#hobbies-checkbox-2').check({force: true})
        //Upload Picture
        cy.get('#uploadPicture').attachFile('little-samurais.jpg')
        cy.get('#currentAddress').type('Somewhere over the Rainbow')
        //Select State
        cy.get('#state').click()
        cy.get('#state').within(() => {
            cy.get('#react-select-3-option-0').should('be.visible').click()
        })
        cy.get('div[class$="-singleValue"]').should('contain', 'NCR')
        //Select City
        cy.get('#city').click()
        cy.get('#city').within(() => {
            cy.get('#react-select-4-option-0').should('be.visible').click()
        })
        cy.get('div[class$="-singleValue"]').should('contain', 'Delhi')
        cy.get('#submit').click()
    })
})
