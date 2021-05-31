import { useEffect, useState } from 'react';
import Header from './Header';
import TemperatureTable from './TemperatureTable';

// TODO: fetch list of products from the server
const products = [1, 2, 3, 4, 5, 6];

function App({fetchInformation}) {
    const [state, setState] = useState({});

    useEffect(() => {
        setInterval(fetchInformation, 5000);

        fetchInformation();
    }, []);

    return (
        <>
            <Header title="SensorTech" />
            <div className="App">
                <h2>Beers</h2>
                <TemperatureTable table={temperatures} />
            </div>
        </>
    );
}

export default App;
