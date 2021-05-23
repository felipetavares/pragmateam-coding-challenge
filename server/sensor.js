const fetch = require('node-fetch');

async function fetchSensorData(sensor) {
  const url = `https://temperature-sensor-service.herokuapp.com/sensor/${sensor}`;

  return fetch(url).then((response) => response.json());
}

module.exports = {
    fetchSensorData,
};
