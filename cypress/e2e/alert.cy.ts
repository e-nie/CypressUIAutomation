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
    it('AJAX loader test', () => {
        cy.visit('https://www.webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button3').click()
        cy.get('#loader', {timeout: 6_000}).should('not.be.visible')
        cy.contains('CLICK ME!').click()
        cy.get('h4').should('contain', 'Well Done For Waiting....!!!')
        cy.contains('Close').click()
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

    it('Confirm box test', () => {
        cy.visit('https://www.webdriveruniversity.com/Popup-Alerts/index.html')
        cy.window().then((window) => {
            cy.stub(window, 'confirm').returns(false)
        })
        cy.get('#button4').click()
        cy.window().its('confirm').should('have.been.calledOnce')
        cy.window().its('confirm').should('have.been.calledWith', 'Press a button!')
    })
})


//HOMEWORK

describe('ALERT - DEMOQA', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/alerts')
    })

    it('Alert button', () => {
        cy.on('window:alert', (alertMsg) => {
            expect(alertMsg).to.equal('You clicked a button')
        })
        cy.get('#alertButton').click()
    })

    it('Timer Alert button', () => {
        cy.window().then((window) => {
            cy.stub(window, 'alert').as('alertStub')
        })
        cy.get('#timerAlertButton').click()
        cy.wait(5000)
        cy.get('@alertStub').should('have.been.calledOnceWith', 'This alert appeared after 5 seconds')
        // cy.contains('Close').click()
    })

    it('Confirm button test', () => {
        cy.on('window:confirm', (text => {
            expect(text).to.equal('Do you confirm action?')
            return true
        }))
        cy.get('#confirmButton').click()
        cy.get('#confirmResult').should('contain', 'You selected Ok')
    })

    it('Cancel button test', () => {
        cy.on('window:confirm', (text => {
            expect(text).to.equal('Do you confirm action?')
            return false
        }))
        cy.get('#confirmButton').click()
        cy.get('#confirmResult').should('contain', 'You selected Cancel')
    })

    it.only('Prompt box test', () => {
        cy.get('#promtButton').click()
        cy.window().then((window) => {
            cy.stub(window, 'prompt').returns('Evchen')
        })
        cy.get('#promtButton').click()
        cy.on('window:prompt', (promptText) => {
            expect(promptText).to.equal('Please enter your name')
        })
        cy.get('#promptResult').should( 'contain', 'You entered Evchen')


    })
})
