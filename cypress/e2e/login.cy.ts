describe('LOGIN', () => {
    it('Login Page', () => {
        cy.visit('https://automationteststore.com/index.php?rt=account/login')
        cy.get('[id="loginFrm_loginname"]').type('pasvtestuser')
        cy.get('[id="loginFrm_password"]').type('test1234')
        cy.get('[title="Login"]').click()
        cy.contains('My Account').should('be.visible')
        cy.contains('Welcome back test').should('be.visible')

    })

    it('Login Page1', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[placeholder="Username"]').type('Admin')
        cy.get('[placeholder="Password"]').type('admin123')
        cy.get('[type="Submit"]').click()
        cy.contains('Dashboard').should('be.visible')
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    })

    it('Login Page2', () => {
        cy.visit('https://coding.pasv.us/user/login')
        cy.get('[id="normal_login_email"]').type('vl1vl@yahoo.com')
        cy.get('[id="normal_login_password"]').type('57ThTRTV99qf!5L')
        cy.get('[type="submit"]').click()
        //cy.contains('a', 'Курсы').should('have.attr', 'href', '/course');
        cy.url().should('include', '/profile');
    })

    it('Login Page3', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('[id="username"]').type('tomsmith')
        cy.get('[id="password"]').type('SuperSecretPassword!')
        cy.get('[type="submit"]').click()
        cy.contains('h2', 'Secure Area').should('be.visible')
        cy.url().should('eq', 'https://the-internet.herokuapp.com/secure')
    })

    it('Login Page3', () => {
        cy.visit('https://demoqa.com/login')
        cy.get('[id="userName"]').type('EvchenNie')
        cy.get('[id="password"]').type('Evchen!1108')
        cy.get('[id="login"]').click()
        cy.contains('[id="userName-value"]').should('have.text','EvchenNie')


    })
})




/*
user: pasvtestuser
Pwd: test1234
 */
