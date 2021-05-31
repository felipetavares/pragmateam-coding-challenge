const Product = require('./Product');

export default class Beer extends Product {
    constructor(id, name, minTemp, maxTemp) {
        super(id, name);
        
        this.minTemp = minTemp;
        this.maxTemp = maxTemp;
    }
}
