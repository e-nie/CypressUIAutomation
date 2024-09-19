describe('FORMS', () => {
    describe('DROPDOWN', () => {
        beforeEach(() => {
            cy.visit('https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
            cy.log('I am in the beforeEach block')
            console.log('Website is opened');
        })
        it('select value in dropdown1', () => {
            //cy.visit('https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
            cy.get('#dropdowm-menu-1').select('c#').should('have.value', 'c#')
        })

        it('select value in dropdown2', () => {
            //cy.visit('https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
            cy.get('#dropdowm-menu-2').select('Maven').should('have.value', 'maven')
        })

        it('select value in dropdown3', () => {
            cy.get('#dropdowm-menu-3').select('CSS').should('have.value', 'css')
        })
    })

    describe('CHECKBOXES', () => {
        beforeEach(() => {
            cy.visit('https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
            cy.log('I am in the beforeEach block')
            console.log('Website is opened');
        })

        it('should check  and uncheck checkbox1', () => {
            cy.get('[type="checkbox"]').eq(0).check().should('be.checked')
        })
        it('should check  all checkboxes', () => {
            cy.get('[type="checkbox"]').each(checkbox => {
                cy.wrap(checkbox).check().should('be.checked')
            })
        })

        it('should uncheck  all checkboxes', () => {
            cy.get('[type="checkbox"]').each(uncheckedBox => {
                cy.wrap(uncheckedBox).uncheck().should('not.be.checked')
            })
        })
    })

    describe.only('RADIO BUTTONS', () => {
        beforeEach(() => {
            cy.visit('https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
            cy.log('I am in the beforeEach block')
            console.log('Website is opened');
        })

        it('check radio button Orange', () => {
            cy.get('#radio-buttons').within(() => {
                cy.get('[value="orange"]').check().should('be.checked')
            })
        })

        it('check each radio button', () => {
            cy.get('#radio-buttons').within(() => {
                cy.get('[type="radio"]').each(radio => {
                    cy.wrap(radio).check().should('be.checked')
                })
                cy.get('[type="radio"]:checked').should('have.length', 1)
            })
        })
    })
})
