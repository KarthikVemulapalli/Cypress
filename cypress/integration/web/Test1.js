/// <reference types="Cypress" />
//The above line will help to get auto suggestions for Cypress methods

describe('Sample TestSuite', function(){
    it('Sample TestCase', function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')         //Launch URL
        cy.get('input.search-keyword').type('Cucumber')
        cy.wait(1000)
        
        //Handle Invisible Elements
        cy.get('.product:visible').should('have.length.at.least', 1)
        //should() is a 'Chai' assertions
        //':visible' is a jquery structure, which will show only visible elements in WebPage
    })
})