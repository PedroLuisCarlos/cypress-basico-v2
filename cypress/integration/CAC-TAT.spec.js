/// <reference types="Cypress" />
describe('Central de Atendimento ao Cliente TAT', function () {
    beforeEach(function () {
      cy.visit('./src/index.html')
    })
  
  
    it('verifica o título da aplicação', function () {
      cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })
  
    it('preenche os campos obrigatórios e envia o formulário', function () {
        const longtext = 'teste, teste, teste, teste, teste, testeteste, teste, teste, teste, teste, testeteste, teste, teste, teste, teste, testeteste, teste, teste, teste, teste, teste'
      cy.get('#firstName').type('Pedro')
      cy.get('#lastName').type('Carlos')
      cy.get('#email').type('pedrovilhalva@gmail.com')
      cy.get('#open-text-area').type(longtext, {delay: 0})
      cy.contains('button','Enviar').click()
      cy.get('.success').should('be.visible')
    })

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
        cy.get('#firstName').type('Pedro')
      cy.get('#lastName').type('Carlos')
      cy.get('#email').type('pedrovilhalva@gmail,com')
      cy.get('#open-text-area').type('Teste')
      cy.contains('button','Enviar').click()
      cy.get('.error').should('be.visible')
    })

    it('Campo telefone continua vazio quando prenchido com valor nao-numerico', function() {
        cy.get('#phone')
        .type('abcdefghij')
        .should('have.value','')
    })

it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function(){
    cy.get('#firstName').type('Pedro')
    cy.get('#lastName').type('Carlos')
    cy.get('#email').type('pedrovilhalva@gmail.com')
    cy.get('#phone-checkbox').click()
    cy.get('#open-text-area').type('Teste')
    cy.contains('button','Enviar').click()
    cy.get('.error').should('be.visible')
})

it('preenche e limpa os campos nome, sobrenome, email e telefone', function() {
    cy.get('#firstName')
    .type('Pedro')
    .should('have.value', 'Pedro')
    .clear()
    .should('have.value', '')

    cy.get('#lastName')
    .type('Carlos')
    .should('have.value', 'Carlos')
    .clear()
    .should('have.value', '')

    cy.get('#email')
    .type('pedrovilhalva2@gmail.com')
    .should('have.value', 'pedrovilhalva2@gmail.com')
    .clear()
    .should('have.value', '')

    cy.get('#phone')
    .type('1234567890')
    .should('have.value', '1234567890')
    .clear()
    .should('have.value', '') 
})
    it('envia o formuário com sucesso usando um comando customizado', function() {
        cy.contains('button','Enviar').click()
        cy.get('.error').should('be.visible')
    })

    it('envia o formuário com sucesso usando um comando customizado', function(){
      cy.fillMandatoryFieldsAndSubmit()
      cy.get('.success').should('be.visible')
    })



    } )
  
  