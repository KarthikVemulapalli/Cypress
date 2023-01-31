/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

import 'cypress-iframe'

describe('iFrames Suite', function(){
    it('iFrames TestCase', function(){
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.wait(3000)
        //iFrame interaction
        cy.frameLoaded('#courses-iframe')
        cy.iframe().contains('Mentorship').click()
        cy.wait(3000)
        cy.iframe().find('h1[class*="pricing-title"]').should('have.length', 2)

    })
})