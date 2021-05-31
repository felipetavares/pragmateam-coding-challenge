const Product = require('./Product');

export default class Beer extends Product {
    constructor(id, name, minTemp) {
        super(id, name);
        
        this.maxTemp = minTemp;
    }
}
