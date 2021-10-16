let BaseForm = class {
    constructor({
        locator,
        by = 'css-selector',
    } = {}) {
        this.locator = locator;
        this.by = by;
    }
    
    getLocator() {
        return cy.getElement(this.locator, { by: this.by });
    }
};

export default BaseForm;
