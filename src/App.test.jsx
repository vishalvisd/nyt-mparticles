import {beforeEach, describe, expect, it} from 'vitest'
import {cleanup, render, screen} from '../test-utils';
import {act} from '@testing-library/react';
import {Provider} from 'react-redux'
import {store} from './app/store'
import App from './App'

beforeEach(() => {
    cleanup();
})

describe('App Render', () => {
    it('should render the App component if expected store is provided', async () => {
        await act(async () => render(<Provider store={store}>
            <App/>
        </Provider>));
        const ArticleCardElement = screen.getByTestId('data-app');
        expect(ArticleCardElement).toBeInTheDocument();
    });

});
