/// <reference types="Cypress" />

describe('TestSuite', function(){
    it('Practice TestCase', function(){
        
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('input.search-keyword').type('Ca')
        cy.wait(1000)
        
        cy.get('div.products').as('ProductsLocator')
        cy.get('@ProductsLocator').find('.product').should('have.length', 4)
        
        cy.get('@ProductsLocator').find('.product').each(($element, index, $list) => {
            const VegName = $element.find('h4.product-name').text()
            if(VegName.includes('Carrot')) {
                cy.wrap($element).find('button').click()
            }
        })
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
        
    })
})