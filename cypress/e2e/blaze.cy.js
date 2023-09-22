/// <reference types="cypress" />

describe('Sign In page', () => {
    beforeEach(() => {
      cy.visit("https://www.demoblaze.com/")
    });
    
    const userNmae = 'wesaf'
    const password = 'wesaf'
  
    it.skip('should is able Sign up account', () => {
      cy.get('#signin2').click()
      cy.get('#sign-username').type(userNmae);
      cy.get('#sign-password').type(password);
      cy.get('.btn').contains('Sign up').click()
      // cy.url().should('equal', Cypress.config().baseUrl + "secure")
    });
  
    it.skip('should Login login in same account', () => {
      cy.get('#login2').click()
      cy.get('#loginusername').type(userNmae)
      cy.get('#loginpassword').type(password);
      cy.get('.btn').contains('Log in').click()
    });
    it('should add Samsung Galaxy s6  into cart', () =>{
      cy.get('#login2').click()
      cy.get('#loginusername').type(userNmae)
      cy.get('#loginpassword').type(password);
      cy.get('.btn').contains('Log in').click()
      // cy.visit('https://www.demoblaze.com/')
      cy.get('.card-block').contains('Samsung galaxy s6').click();
      cy.get('.btn').contains('Add to cart').click()
      cy.get('#cartur').click()
      cy.get('.success').should('contain.text', 'Samsung galaxy s6')
    })
  });
  
    