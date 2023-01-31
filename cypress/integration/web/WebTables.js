/// <reference types="Cypress" />

describe('Element Visibility Suite', function(){
    it('Element Visibility TestCase', function(){
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('tr td:nth-child(2)').each(($element, index, $list) => {
            const coursename = $element.text()
            if(coursename.includes('Python')){
                //next() is used to move to next immediate sibling webelement
                //next() will be only works on get()
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(priceelement){
                    const bookprice = priceelement.text()
                    expect(bookprice).to.equal('25')
                })
            }
        })

    })
})