/// <reference types="Cypress" />

describe('WindowTabHandle Suite', function(){
    it('TabHandle TestCase', function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.url().should('include','AutomationPractice')
        //prop() get property value of web element
        cy.get('#opentab').then(function(element){
            const tablink = element.prop('href')
            cy.log("href link - "+tablink)
        })

        //Cypress cannot handle Child windows. So we need to make sure the new link should be launched in current working window.
        //'Target' attribute helps in launching URL in new window. To work in Cypress, we need to remove Target attribute of element in DOM and launch the URL in same page.
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.wait(1000)
        cy.url().should('include','rahulshettyacademy')
        cy.go('back')
    
    })
})