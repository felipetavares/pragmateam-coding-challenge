var expect = require("chai").expect;

const {checkTemperatureForProduct} = require('../temperature');
const temperatures = require('../data/productTemperatures');

describe("Temperature Range Checker", () => {
    it("alerts when temperature is too low", () => {
        for (let [id, product] of Object.entries(temperatures)) {
            if (typeof(product.minimum) !== "undefined") {
                expect(checkTemperatureForProduct(id, product.minimum-1)).to.equal(-1);
            }
        }
    });

    it("alerts when temperature is too high", () => {
        for (let [id, product] of Object.entries(temperatures)) {
            expect(checkTemperatureForProduct(id, product.maximum+1)).to.equal(1);
        }
    });

    it("does not alert when temperature between maximum and minimum", () => {
        for (let [id, product] of Object.entries(temperatures)) {
            
            if (typeof(product.minimum) !== "undefined") {
                // Products which do not have a minimum temp.
                const goodTemperature = product.maximum-1;
                expect(checkTemperatureForProduct(i, goodTemperature)).to.equal(0);
            } else {
                // Products which have both
                const averageTemperature = (product.minimum+product.maximum)/2;
                expect(checkTemperatureForProduct(i, averageTemperature)).to.equal(0);
            }
        }
    });
});
