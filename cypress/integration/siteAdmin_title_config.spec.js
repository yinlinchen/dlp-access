const USERNAME = "devtest";
const PASSWORD = Cypress.env('password');

describe("Update Site title test", function() {
    before(function() {
      cy.visit("/siteAdmin");
      cy.get("amplify-authenticator")
          .find(selectors.usernameInput, {
            includeShadowDom: true,
          })
          .type(USERNAME);

      cy.get("amplify-authenticator")
        .find(selectors.signInPasswordInput, {
          includeShadowDom: true,
        })
        .type(PASSWORD, { force: true });

      cy.get("amplify-authenticator")
        .find(selectors.signInSignInButton, {
          includeShadowDom: true,
        })
        .first()
        .find("button[type='submit']", { includeShadowDom: true })
        .click({ force: true });
    });
 
    describe("Update Site title and change it back", () => {
      it("Update site title", () => {
        cy.get("input[value='editSite']").parent().click();
        cy.get("input[name='siteTitle']").clear().type("IAWA1");
        cy.contains("Update Site").click();
        cy.contains("Site Title: IAWA1").should('be.visible');
      })
      
      it("Reverse site title", () => {
        cy.get("input[value='editSite']").parent().click();
        cy.get("input[name='siteTitle']").clear().type("IAWA");
        cy.contains("Update Site").click();
        cy.contains("Site Title: IAWA").should('be.visible');
      })
    });

    after("User signout:", () => {
      cy.get("amplify-sign-out")
        .find(selectors.signOutButton, { includeShadowDom: true })
        .contains("Sign Out").click({ force: true });
    })
});

export const selectors = {
  usernameInput: '[data-test="sign-in-username-input"]',
  signInPasswordInput: '[data-test="sign-in-password-input"]',
  signInSignInButton: '[data-test="sign-in-sign-in-button"]',
  signOutButton: '[data-test="sign-out-button"]'
}