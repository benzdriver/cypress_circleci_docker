import GoogleSearchPage from '../pageObjects/googleSearchPage.js';
import GoogleResultsPage from '../pageObjects/googleResultsPage.js';


let Gui = class {
    constructor(host) {
        this.host = host;
        
        this.googleSearchPage = new GoogleSearchPage();
        this.googleResultsPage = new GoogleResultsPage();
    }
};

export default Gui;
