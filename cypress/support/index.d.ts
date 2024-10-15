declare namespace Cypress {
    interface Chainable<Subject = any> {
        loginATS(username: string, password: string): Chainable<void>

        loginOrange(username: string, password: string): void

        loginPASV(email: string, password: string): void

        loginTheInternetHeroku(username: string, password: string): void

        loginDemoQA(username: string, password: string): void

        getIframeBody(iframe: string): Cypress.Chainable<JQuery<HTMLElement>>
    }
}
