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

    it('seleciona um produto (YouTube) por seu texto', function() {
      cy.get('#product')
      .select('YouTube')
      .should('have.value', 'youtube')
    })

    it('seleciona um produto (Mentoria) por seu valor (value)', function(){
      cy.get('#product')
      .select('mentoria')
      .should('have.value', 'mentoria')
        })

    it('seleciona um produto (Blog) por seu índice', function() {
      cy.get('#product')
      .select(1)
      .should('have.value', 'blog')
    })

    it('marca o tipo de atendimento "Feedback"', function () {
      cy.get('input[type="radio"][value="feedback"]')
      .check()
      .should('have.value', 'feedback')
    })

    it('marca cada tipo de atendimento', function(){
      cy.get('input[type="radio"]')
      .should('have.length', 3) 
      .each(function($radio) {
        cy.wrap($radio).check()
        cy.wrap($radio).should('be.checked')
      })
    })
    it('marca ambos checkboxes, depois desmarca o último', function(){
      cy.get('input[type="checkbox"]')
      .check()
      .should('be.checked')
      .last()
      .uncheck()
      .should('not.be.checked')
    })

    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function(){
      cy.get('#firstName').type('Pedro')
    cy.get('#lastName').type('Carlos')
    cy.get('#email').type('pedrovilhalva@gmail.com')
    cy.get('#phone-checkbox').check()
    cy.get('#open-text-area').type('Teste')
    cy.contains('button','Enviar').click()
    cy.get('.error').should('be.visible')
})
    it('seleciona um arquivo da pasta fixtures)', function(){
      cy.get('input[type="file"')
      .should('not.have.value')
      .selectFile('./cypress/fixtures/example.json')
      .should(function($input) { 
        expect($input[0].files[0].name).to.equal('example.json')
      })
    })

    it('seleciona um arquivo simulando um drag-and-drop', function(){
      cy.get('input[type="file"')
      .should('not.have.value')
      .selectFile('./cypress/fixtures/example.json', {action:'drag-drop'})
      .should(function($input) { 
        expect($input[0].files[0].name).to.equal('example.json')
      })
    })

    it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', function(){
      cy.fixture('example.json').as('samplefile')
      cy.get('input[type="file"')
      .selectFile('@samplefile')
      .should(function($input) { 
        expect($input[0].files[0].name).to.equal('example.json')
      })
    })

  })




  
  