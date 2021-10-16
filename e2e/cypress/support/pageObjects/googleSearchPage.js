class GoogleSearchPage  {
    getSearchBox(){
        return cy.getElement('[title="Search"]');
    }

    getSubmitBn(){
        return cy.getElement('[value="Google Search"]');
    }

    search({
        searchBox = null,
        submit = null,
    } = {}) {
        if (searchBox !== null) {
            this.getSearchBox().type(searchBox);
        }

        if (submit === true) {
            this.getSearchBox().type('{enter}');
        }
    }
}

export default GoogleSearchPage;
