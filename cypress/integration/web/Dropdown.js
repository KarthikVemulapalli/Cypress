/// <reference types="Cypress" />

describe('Dropdown Suite', function(){

    it('Static Dropdown TestCase', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //Handle Static Dropdowns
        cy.get('select').select('Option2').should('have.value', 'option2')
        //select() accepts value attribute or visibletext
        cy.wait(2000)
    })

    it('Dynamic Dropdown TestCase', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //Handle Dynamic Dropdowns
        cy.get('#autocomplete').type('ind')
        cy.get('li.ui-menu-item div').should('have.length.at.least', 1)
        cy.get('li.ui-menu-item div').each(($element, index, $list) => {
            const DynDPValue = $element.text()
            if(DynDPValue === 'India'){
                cy.wrap($element).click()
            }
        })
        cy.get('#autocomplete').should('have.value','India')
    })
    
})