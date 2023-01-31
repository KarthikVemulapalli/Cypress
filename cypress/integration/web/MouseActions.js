/// <reference types="Cypress" />

describe('Mouse Actions Suite', function(){
    it('Mouse Actions TestCase', function(){
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //Manipulate DOM, forcely displays all elements which are enabled when mouse hover
        //jQuery show() only works on hidden elements immediate parent
        cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include', '#top')

    })
})