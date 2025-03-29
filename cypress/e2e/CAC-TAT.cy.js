/// <reference types="cypress" />
describe('Testes e2e', () => {
  
  beforeEach(() => cy.visit('http://127.0.0.1:8080/'))

  it('Verifica título da página', () => {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  });

  it('Envia todos os dados corretamente', () => {
    cy.get('#firstName').should('be.visible').type('Wes')
    cy.get('#lastName').should('be.visible').type('Vieira')
    cy.get('#email').should('be.visible').type('wes@wes.com.br', {delay:0})
    cy.get('#open-text-area').should('be.visible').type('Escrevendo uma mensagem de teste aqui.', {delay:0})
    cy.get('.button').should('be.visible').click()
  });

  it('Valida campos obrigatórios', () => {
    //Nome em branco
    cy.get('#lastName').as('sobrenome').should('be.visible').type('Vieira')
    cy.get('#email').as('email').should('be.visible').type('wes@wes.com.br', {delay:0})
    cy.get('#open-text-area').as('mensagem').should('be.visible').type('Escrevendo uma mensagem de teste aqui.', {delay:0})
    cy.get('.button').as('enviar').should('be.visible').click()
    cy.get('.error > strong').as('msgerro').should('be.visible').should('have.text', 'Valide os campos obrigatórios!')
    
    //Aguarda mensagem de erro sumir
    cy.get('@msgerro').should('not.be.visible')

    //Sobrenome em branco
    cy.get('#firstName').as('nome').should('be.visible').type('Wes')
    cy.get('@sobrenome').clear()
    cy.get('@email').should('be.visible').clear().type('wes@wes.com.br', {delay:0})
    cy.get('@mensagem').should('be.visible').clear().type('Escrevendo uma mensagem de teste aqui.', {delay:0})
    cy.get('@enviar').should('be.visible').click()
    cy.get('@msgerro').should('be.visible').should('have.text', 'Valide os campos obrigatórios!')

    //Aguarda mensagem de erro sumir
    cy.get('@msgerro').should('not.be.visible')
    

  });

})

