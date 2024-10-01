import {navBarValue} from "../utilities/data";

export class HomePage {
    // constructor(){}
    open = ():void => {
        cy.visit('/')
    }
    navbar = () => cy.get('.nav-pills')
    siblings = () => cy.get('> li > a')

    verifyNavbarValue = ():void => {
        this.navbar().within(() => {
            this.siblings().each((el, index) => {
                // cy.wrap(el.text())
                cy.log(el.text())
                console.log(el.text());
                expect(el.text().trim(), `Received text: ${el.text().trim()}, should be: ${navBarValue[index]}`).equal(navBarValue[index])
                cy.wrap(el).invoke('text').invoke('trim').should('eq', navBarValue[index])
            })
        })
    }
}
