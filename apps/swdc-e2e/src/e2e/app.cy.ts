import { getLogoText } from '../support/app.po';

describe('swdc', () => {
  beforeEach(() => cy.visit('/'));

  it('should display site name', () => {

    // Function helper example, see `../support/app.po.ts` file
    getLogoText().contains('Steve Witman');
  });
});
