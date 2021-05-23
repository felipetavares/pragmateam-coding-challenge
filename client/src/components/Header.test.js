import '@testing-library/jest-dom/extend-expect'
import {render, cleanup} from '@testing-library/react';
import Header from './Header';

// Used to test components with random (but constant) data
const randomString = 'CI91VapE8M';
const randomStrings = [
    'CI91VapE8M', '9vumGrCCHV', '0iZhkVzxXc',
    'yqinKY6YwK', 'tsvzpwAS2y', 'BB6rBCkRbd',
    '8K7I2iwh6K', 'taWUtMwQAO', '2xY5BobHAh',
];

describe('<Header />', () => {
    it('renders title property', () => {
        const titles = randomStrings;

        for (const title of titles) {
            const {getByRole} = render(<Header title={title} />);
            expect(getByRole('heading')).toHaveTextContent(title);
            cleanup();
        }
    });

    it('uses semantic components', () => {
        const title = randomString;

        const {getByRole} = render(<Header title={title} />);

        expect(getByRole('banner')).toBeTruthy();
    });
});

