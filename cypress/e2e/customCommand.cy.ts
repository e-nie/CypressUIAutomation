describe('LOGIN', () => {
    describe('ATS - POSITIVE', () => {
        it('Login Page - ATS', () => {
            cy.loginATS('pasvtestuser', 'test1234')
            cy.contains('My Account').should('be.visible')
            cy.contains('Welcome back test').should('be.visible')
        })
    })
    describe('ATS - NEGATIVE', () => {
        it('Login Page - ATS', () => {
            cy.loginATS('pasvtestuser', 'quatsch123')
            cy.contains('Error: Incorrect login or password provided.')
            cy.get('.alert-error').should('be.visible').and('contain.text', 'Error: Incorrect login or password provided.')
        })
    })

    describe('OrangeHRM - POSITIVE', () => {
        it('Login Page - OrangeHRM', () => {
            cy.loginOrange('Admin', 'admin123')
            cy.get('.oxd-loading-spinner').should('be.visible');
            cy.get('.oxd-text--h6').should('be.visible')
            cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        })
    })
    describe('OrangeHRM - NEGATIVE', () => {
        it('Login with wrong password - OrangeHRM', () => {
            cy.loginOrange('Admin', 'wrong123')
            cy.get('.oxd-alert-content-text').should('be.visible').and('have.text', 'Invalid credentials')
        })
    })

    describe('PASV - POSITIVE', () => {
        it('Login Page - PASV', () => {
            cy.loginPASV('vl1vl@yahoo.com', '57ThTRTV99qf!5L')
            cy.get('h1').should('have.text', 'Eva Niehaus')
            cy.url().should('include', '/profile');
            cy.contains('Diary').should('be.visible')
        })
    })
    describe('PASV - NEGATIVE', () => {
        it('Login Page - PASV', () => {
            cy.loginPASV('vl1vl@yahoo.com', 'wrongPassword')
            cy.get('.ant-notification-notice-message').should('contain.text', 'User login. Fail')
        })
    })

    describe('The Internet App - Heroku - POSITIVE', () => {
        it('Login Page - The Internet App - Heroku', () => {
            cy.loginTheInternetHeroku('tomsmith', 'SuperSecretPassword!')
            cy.contains('h2', 'Secure Area').should('be.visible')
            cy.url().should('eq', 'https://the-internet.herokuapp.com/secure')
            cy.get('.flash.success').should('contain', 'You logged into a secure area!')
        })
    })
    describe('The Internet App - Heroku - NEGATIVE', () => {
        it('Login Page - invalid creds', () => {
            cy.loginTheInternetHeroku('invalidUser', 'invalidPassword')
            cy.get('.flash.error')
                .should('contain', 'Your username is invalid!')
        })
    })

    describe('Login Page - DEMO-QA - POSITIVE', () => {
        it('Login Page - DEMO-QA', () => {
            cy.loginDemoQA('EvchenNie', 'Evchen!1108')
            cy.get('[id="userName-value"]')
                .should('be.visible')
                .and('have.text', 'EvchenNie')
        })
    })
    describe('Login Page - DEMO-QA - NEGATIVE', () => {
        it('Login w/wrong password - DEMO-QA', () => {
            cy.loginDemoQA('EvchenNie', 'Evchen!11')
            cy.get('#name').should('be.visible').and('have.text', 'Invalid username or password!')
        })
    })
})
