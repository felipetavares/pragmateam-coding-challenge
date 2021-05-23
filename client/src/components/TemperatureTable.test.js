import '@testing-library/jest-dom/extend-expect'
import {render, cleanup} from '@testing-library/react';
import TemperatureTable from './TemperatureTable';

describe('<TemperatureTable />', () => {
    it('renders all entries', () => {
        const table = {
            0: { name: 'Beer 1', temperature: 15, status: -1 },
            1: { name: 'Beer 2', temperature: -15, status: 0 },
            2: { name: 'Beer 3', temperature: 0, status: 1 },
        };

        const statuses = {
            [+1]: 'too high',
            [-1]: 'too low',
            [0]: 'all good',
        };

        const {getByText} = render(<TemperatureTable table={table} />);

        for (const [id, beer] of Object.entries(table)) {
            expect(getByText(beer.name)).toBeTruthy();
            expect(getByText(beer.temperature.toString())).toBeTruthy();
            expect(getByText(statuses[beer.status])).toBeTruthy();
        }
    });
});
