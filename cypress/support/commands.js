Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Pedro')
    cy.get('#lastName').type('Carlos')
    cy.get('#email').type('pedrovilhalva@gmail.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button','Enviar').click()
})
