describe('ALERT', () => {
    it('should display an alert with the correct message', () => {
        cy.visit('https://www.webdriveruniversity.com/Popup-Alerts/index.html')
        cy.on('window:alert', (alertMessage) => {
            expect(alertMessage).to.equal('I am an alert box!')
        })
        cy.get('#button1').click()
    })

    it('should display an alert with the correct message using spy command', () => {
        cy.visit('https://www.webdriveruniversity.com/Popup-Alerts/index.html')
        const alertStub = cy.stub()
        cy.on('window:alert', alertStub)
        cy.get('#button1').click()
        cy.then(() => {
            expect(alertStub).to.be.calledOnce
            expect(alertStub.getCall(0)).to.be.calledWith('I am an alert box!')
        })
    })

    it('popup alert - modal popup', () => {
        cy.visit('https://www.webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button2').click()
        cy.get('h4').should('contain', 'It’s that Easy!!  Well I think it is.....')
        cy.contains('Close').click()
        //OR
        // cy.get('.modal-footer>.btn').click()
    })

    it('Cancel box test', () => {
        cy.visit('https://www.webdriveruniversity.com/Popup-Alerts/index.html')
        cy.on('window:confirm', (text => {
            expect(text).to.equal('Press a button!')
            return false
        }))
        cy.get('#button4').click()
        cy.get('#confirm-alert-text').should('contain', 'You pressed Cancel!')
    })

    it('Confirm box test', () => {
        cy.visit('https://www.webdriveruniversity.com/Popup-Alerts/index.html')
        cy.on('window:confirm', (text => {
            expect(text).to.equal('Press a button!')
            return true
        }))
        cy.get('#button4').click()
        cy.get('#confirm-alert-text').should('contain', 'You pressed OK!')
    })

    it.only('Confirm box test', () => {
        cy.visit('https://www.webdriveruniversity.com/Popup-Alerts/index.html')
       cy.window().then((window)=> {
           cy.stub(window, 'confirm').returns(false)
       })
        cy.get('#button4').click()
        cy.window().its('confirm').should('have.been.calledOnce')
        cy.window().its('confirm').should('have.been.calledWith', 'Press a button!')

    })
})

