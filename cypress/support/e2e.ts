// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-file-upload'
import 'cypress-iframe'
import 'cypress-real-events'

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false;
});


/*
declare namespace Cypress {
    interface Chainable<Subject = any> {
        login(username: string, password: string):Chainable<void>
    }
}


 */

//declare custom command for login //does not work - see index.ts

/*
declare global {
    namespace Cypress {
        interface Chainable {
            login: (email: string, password: string) => Cypress.Chainable<void>
        }
    }
}


 */





export {};
