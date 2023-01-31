/// <reference types="Cypress" />

describe('Alerts Suite', function(){
    it('Alerts TestCase', function(){
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click()
        //Cypress automatically accepts closes popups

        //To retrieve the text inside the alert we need to use developers alert trigger mechanism
        //developers use 'window:alert' to trigger alerts
        //when we trigger the alert, browser responds it with String value
        cy.on('window:alert', strvalue => {
            //validate text inside alert popup
            expect(strvalue).to.equal('Hello , share this practice page and share your knowledge')
        })

    })
})