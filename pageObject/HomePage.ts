/// <reference types="cypress" />

import {NavBarValue, PromoSectionValue} from "../interface/interface";

export class HomePage {
    // constructor(){}
    open = (): void => {
        cy.visit('/')
    }
    navbar = () => cy.get('.nav-pills')
    siblings = () => cy.get(' > li > a')

    verifyNavbarValue = (navBar: NavBarValue): void => {
        this.navbar().within(() => {
            this.siblings().each((el, index) => {
                // cy.wrap(el.text())
                cy.log(el.text())
                console.log(el.text());
                expect(el.text().trim(), `Received text: ${el.text().trim()}, should be: ${navBar[index]}`).equal(navBar[index])
                cy.wrap(el).invoke('text').invoke('trim').should('eq', navBar[index])
            })
        })
    }


    promoSection = () => cy.get('.promo_section')
    promoBlock = () => cy.get(' div > h2')

    verifyPromoSection = (promoSection:PromoSectionValue): void => {
        this.promoSection().within(() => {
            this.promoBlock().each((el, index) => {
                cy.log(el.text())
                console.log(el.text());
                expect(el.text().trim(), `Received text: ${el.text().trim()} should be: ${promoSection[index]}`).equal(promoSection[index])
                cy.wrap(el).invoke('text').invoke('trim').should('eq', promoSection[index])
            })
        })
    }

}
