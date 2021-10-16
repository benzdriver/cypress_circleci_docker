import Gui from '../support/common/gui.js';
import searchTerms from '../fixtures/searchTerms.json';


describe('google search tests', () => {
    let gui = new Gui();

    searchTerms.searchterms.forEach(searchterm => {
        it(`test search ${searchterm}`, () => {
            cy.log(searchTerms);
            cy.visit('https://google.ca');
            cy.screenshot('after visiting Google');
            gui.googleSearchPage.search({
                searchBox: searchterm,
                submit: true,
            });
            cy.screenshot(`after searching ${searchterm}`);
            gui.googleResultsPage.getFirstResultUrl().should('contain', 'finn.ai');
            cy.screenshot(`found "finn.ai" in first result for ${searchterm}`);
        });
    });
});
