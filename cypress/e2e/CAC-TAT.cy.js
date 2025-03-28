/// <reference types="cypress" />
describe('Testes e2e', () => {
  
 // beforeEach(() => cy.visit('http://127.0.0.1:8080/'))

  it('Verifica título da página', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  });

})

