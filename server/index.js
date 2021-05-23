const express = require('express');
const cors = require('cors');

const {checkTemperatureForProduct} = require('./temperature');
const {fetchSensorData} = require('./sensor');
const productNames = require('./data/productNames');

const app = express();
const port = 8081;

app.use(cors());

app.get('/temperature/:id', async (req, res) => {
  const id = req.params.id;
  const sensorData = await fetchSensorData(id);

  res.send({
    id: id,
    name: productNames[id],
    temperature: sensorData.temperature,
    status: checkTemperatureForProduct(id, sensorData.temperature)
  });
});

app.listen(port, () => {
  console.log(`SensorTech server at http://localhost:${port}`);
});
