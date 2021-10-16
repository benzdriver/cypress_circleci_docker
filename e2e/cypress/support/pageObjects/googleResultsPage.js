class GoogleResultsPage  {
    getFirstResultUrl(){
        return cy.getElement('#search').getElement('a h3').first().parent().invoke('attr', 'href');
    }
}

export default GoogleResultsPage;
