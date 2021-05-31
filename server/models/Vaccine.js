const Product = require('./Product');

export default class Beer extends Product {
    constructor(id, name, maxTemp) {
        super(id, name);
        
        this.maxTemp = maxTemp;
    }
}
