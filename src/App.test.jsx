import { Provider } from 'react-redux';
import { beforeEach, describe, expect, it } from 'vitest';
import { act } from '@testing-library/react';
import { cleanup, render, screen } from '../test-utils';
import App from './App';
import { store } from './app/store';

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
