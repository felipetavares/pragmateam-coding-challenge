import {render} from '@testing-library/react';
import App from './App';

describe('<App />', () => {
    it('renders without errors', () => {
        render(<App />)
    });

    it('renders without errors', () => {
        const {getByText} = render(<App fetchInformation={() => {
            // ...
        }}/>);

        for (const [id, beer] of Object.entries(table)) {
            expect(getByText(beer.name)).toBeTruthy();
            expect(getByText(beer.temperature.toString())).toBeTruthy();
            expect(getByText(statuses[beer.status])).toBeTruthy();
        }
    });
});
