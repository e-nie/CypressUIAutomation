describe('IFRAME', () => {
    beforeEach(() => {
        cy.visit('https://www.webdriveruniversity.com/')
        cy.get('#iframe').invoke('removeAttr', 'target').click()
    })
    it('iFrame', () => {
        // cy.visit('https://www.webdriveruniversity.com/')
        // cy.get('#iframe').invoke('removeAttr', 'target').click()
        cy.get('[id="frame"]').then(iframe => {
            const body = iframe.contents().find('body')
            cy.wrap(body).find('#button-find-out-more').click()
            cy.wrap(body).find('.modal-body')
                .should('contain', 'Welcome to webdriveruniversity.com we sell ' +
                    'a wide range of electrical goods such as laptops, game consoles, cameras...')
        })
    })

    it('iFrame using alias ', () => {
        cy.get('[id="frame"]').then(iframe => {
            const body = iframe.contents().find('body')
            cy.wrap(body).as('iframe')
            cy.get('@iframe').find('#button-find-out-more').click()
            cy.get('@iframe').find('.modal-body')
                .should('contain', 'Welcome to webdriveruniversity.com we sell ' +
                    'a wide range of electrical goods such as laptops, game consoles, cameras...')
        })
    })

    it('iFrame using plugin ', () => {
        cy.frameLoaded('#frame')
        cy.iframe('#frame')
            .then((iframe: JQuery) => {
                cy.wrap(iframe).as('getIframe')
                cy.get('@getIframe').find('#button-find-out-more').click()
                cy.get('@getIframe').find('.modal-body')
                    .should('contain', 'Welcome to webdriveruniversity.com we sell ' +
                        'a wide range of electrical goods such as laptops, game consoles, cameras...')
            })
    })

    it.only('iFrame using custom command ', () => {
       cy.getIframeBody('#frame').as('getIframe')
        cy.get('@getIframe').find('#button-find-out-more').click()
        cy.get('@getIframe').find('.modal-body')
            .should('contain', 'Welcome to webdriveruniversity.com we sell ' +
                'a wide range of electrical goods such as laptops, game consoles, cameras...')

    })



})

