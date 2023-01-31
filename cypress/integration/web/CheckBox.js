/// <reference types="Cypress" />

//Functionality is same for CheckBox and RadioButton
describe('CheckBox Suite', function(){
    it('CheckBox TestCase', function(){
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        //Handle Checkboxes
        //Click on Checkbox
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        //If we want to provide multiple assertions we can provide 'and()' after should()
        //'have.value' is assertion for value attribute of web element

        //Uncheck the checked checkbox
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        //Check multiple checkboxes, to perform that we need to take common CSS for all checkboxes
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])
        //check() accepts multiple values of 'value' attribute

        //Radiobutton
        cy.get('[value="radio2"]').check().should('be.checked')

    })
})