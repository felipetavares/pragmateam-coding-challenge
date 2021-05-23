var expect = require("chai").expect;

const {checkTemperatureForProduct} = require('../temperature');
const temperatures = require('../data/productTemperatures');

describe("Temperature Range Checker", () => {
    it("alerts when temperature is too low", () => {
        for (let i=1;i<=6;i++) {
            expect(checkTemperatureForProduct(i, temperatures[i].minimum-1)).to.equal(-1);
        }
    });

    it("alerts when temperature is too high", () => {
        for (let i=1;i<=6;i++) {
            expect(checkTemperatureForProduct(i, temperatures[i].maximum+1)).to.equal(1);
        }
    });

    it("does not alert when temperature between maximum and minimum", () => {
        for (let i=1;i<=6;i++) {
            const averageTemperature = (temperatures[i].minimum+temperatures[i].maximum)/2;

            expect(checkTemperatureForProduct(i, averageTemperature)).to.equal(0);
        }
    });
});
