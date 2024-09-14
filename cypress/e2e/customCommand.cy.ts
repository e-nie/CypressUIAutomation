describe('LOGIN', () => {
    it('Login Page', () => {
        cy.login('pasvtestuser', 'test1234')
        cy.contains('My Account').should('be.visible')
        cy.contains('Welcome back test').should('be.visible')
    })
})
