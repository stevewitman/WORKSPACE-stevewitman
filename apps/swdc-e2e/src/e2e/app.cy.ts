import { getLogoText } from '../support/app.po';

describe('swdc-shell-feat-layout-header lib', () => {
  beforeEach(() => cy.visit('/'));

  it('should display site name', () => {
    // Function helper example, see `../support/app.po.ts` file
    getLogoText().contains('Steve Witman');
  });
});

describe('swdc-about-feat-about-shell lib', () => {
  beforeEach(() => cy.visit('/about'));

  it('should have an h2 that displays "ABOUT"', () => {
    cy.get('h2').should('have.text', 'ABOUT');
  });
});

describe('swdc contact lib', () => {
  beforeEach(() => cy.visit('/contact'));

  it('should have an h2 that displays "CONTACT"', () => {
    cy.get('h2').should('have.text', 'CONTACT');
  });
});