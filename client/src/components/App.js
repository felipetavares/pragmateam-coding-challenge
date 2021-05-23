import { useEffect, useState } from 'react';
import Header from './Header';
import TemperatureTable from './TemperatureTable';

// TODO: fetch list of products from the server
const products = [1, 2, 3, 4, 5, 6];

function App() {
    const [temperatures, setTemperatures] = useState({});

    useEffect(() => {
        const fetchProductTemperatures = () =>
              products.forEach(id => {
                  fetch(`http://localhost:8081/temperature/${id}`)
                      .then((response) => response.json())
                      .then((response) =>
                          setItems((prevItems) => ({
                              ...prevItems, [id]: response,
                          }))
                      );
              });

        setInterval(fetchProductTemperatures, 5000);

        fetchProductTemperatures();
    }, []);

    const table = {
        hello: { name: 'Beer 1', temperature: 15, status: 0 }
    };

    return (
        <>
            <Header title="SensorTech" />
            <div className="App">
                <h2>Beers</h2>
                <TemperatureTable table={table} />
            </div>
        </>
    );
}

export default App;
