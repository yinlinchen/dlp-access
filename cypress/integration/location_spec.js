/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})


context('Location', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('cy.hash() - get the current URL hash', () => {
    cy.hash().should('be.empty')
  })

  it('cy.url() - get the current URL', () => {
    cy.url().should('eq', 'http://localhost:3000/')
  })
})
