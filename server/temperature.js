const productTemperatures = require('./data/productTemperatures');

function checkTemperatureForProduct(id, temperature) {
  if (typeof(product.minimum) !== "undefined" &&
      temperature < productTemperatures[id].minimum) {
    return -1;
  } else if (temperature > productTemperatures[id].maximum) {
    return 1;
  } else {
    return 0;
  }
}

module.exports = {
    checkTemperatureForProduct
};
