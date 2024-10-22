import 'cypress-real-events'

describe('MOUSE ACTION', () => {
    beforeEach(() => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView()
            .invoke('removeAttr', 'target')
            .click()
    })

    it('drag and drop', () => {
        cy.get('div[id ="droppable"]').invoke('text').invoke('trim').should('eq', 'DROP HERE!')
        cy.get('div[id ="droppable"]').should('have.css', 'background-color', 'rgb(97, 109, 179)')

        cy.get('div[id ="draggable"]').trigger('mousedown', {which: 1})
        cy.get('[id="droppable"]').trigger('mousemove').trigger('mouseup', {force: true})

        cy.get('div[id ="droppable"]').invoke('text').invoke('trim').should('eq', 'Dropped!')
        cy.get('#droppable [style^="background-color:"]').should('have.css', 'background-color', 'rgb(244, 89, 80)')
    })

    it('double click', () => {
        cy.get('#double-click').should(color=> {
            expect(color).to.have.css('background-color', "rgb(254, 196, 45)")
        })
       cy.get('#double-click').dblclick()
        cy.get('#double-click').then(el=> {
            expect(el).to.have.css('background-color', 'rgb(147, 203, 90)')
        })
    })

    it('able to click and hold', () => {
        cy.get('#click-box').trigger('mousedown', {button:0})
            .then(el=> {
                expect(el).to.have.css('background-color', 'rgb(0, 255, 0)')
            })
    })

    it('hover over', () => {
        cy.get('.dropbtn').each((el, i)=> {
            // cy.wrap(el).trigger('mousdown', {which:1})// does not work
            cy.wrap(el).realHover()
            cy.get('.dropdown-content a.list-alert').eq(i).should('be.visible')
        })
    })
})
