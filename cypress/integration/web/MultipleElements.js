/// <reference types="Cypress" />
//The above line will help to get auto suggestions for Cypress methods

describe('Advanced TestSuite', function(){
    it('Advanced TestCase', function(){
        
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')         //Launch URL
        cy.get('input.search-keyword').type('Ca')
        cy.wait(1000)
        
        //as() functionality is used instead of retrieving locator data from webpage again and again in upcoming steps.
        //in below step, we get() data of 'div.products' multiple times. So we can use '@'
        cy.get('div.products').as('ProductsLocator')

        //Find certain element in a particular div element.
        //get() retrieves the complete WebElement, 'find()' is used to narrow down certain element.
        cy.get('@ProductsLocator').find('.product').should('have.length', 4)
        //In above step we have used alias name using '@' instead of 'div.products'
        
        //Select particular index element using eq()
        //Identify specific element using innertext of WebElement using contains()
        cy.get('@ProductsLocator').find('.product').eq(2).contains('ADD TO CART').click()
        /* The above line indicates,
            1.Collect the complete div using get()
            2.In that div, select the element using find()
            3.Now select the particular index element using eq() in the list of WebElements
            4.Select the desired WebElement by innertext using contains()
        */
        
        //each() is used to iterate inside list. Here we retrieve bunch of elements in list.
        cy.get('div.products').find('.product').each(($element, index, $list) => {
            const VegName = $element.find('h4.product-name').text()
            if(VegName.includes('Carrot')) {
                /* any of the below step can be written to select the product
                    a) cy.wrap($element).contains('ADD TO CART').click()
                    b) cy.wrap($element).find('button').click()
                */
                //we nned to explicitly resolve Promise in this situation. wrap() will resolves the promise of $element.
                cy.wrap($element).find('button').click()
                //Wrap is introduced in latest version. Previously it is internally done but not now.
            }
        })

        //Print the element innner text
        //we cannot use text() directly on cypress methods because it is jquery method, thats why we externally resolving Promise using then()
        cy.get('.brand').then(function(logoelement)
        {
            //log() Prints in Cypress TestRunner
            cy.log("Header Logo Text - "+ logoelement.text())
        })

        //assert if logo text is correctly displayed
        cy.get('.brand').should('have.text','GREENKART')
    
    })
})