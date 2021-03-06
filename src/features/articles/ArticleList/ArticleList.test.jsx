import * as React from 'react';
import get from 'lodash/get';
import nock from 'nock';
import { Provider } from 'react-redux';
import { beforeEach, expect, test } from 'vitest';
import { act } from '@testing-library/react';
import { cleanup, render, screen } from '../../../../test-utils';
import config from '../../../apiConfig.json';
import { store } from '../../../app/store';
import ArticleList from './ArticleList';

const MOST_POPULAR_BASE_URL = `${get(config, 'NYT_API_BASE_URLS.BASE')}/${get(config, 'NYT_API_BASE_URLS.MOST_POPULAR')}`;

beforeEach(() => {
    cleanup();
})

test('it should render ArticleList Component', async () => {
    const lookupDays = "";
    const handleListChange = () => {
    };
    await act(async () => render(<Provider store={store}>
        <ArticleList lookupDays={lookupDays} onListChange={handleListChange}/>
    </Provider>));

    const ArticleListElement = screen.getByTestId('data-ArticleList');
    expect(ArticleListElement).toBeInTheDocument();
});

// Mock API DATA and verify component is rendering correct items
test('it should render "n" ArticleCard components given "n" elements in data (articles) array', async () => {
    const lookupDays = 7;
    const handleListChange = () => {
    };

    const data = [{
        id: '1',
        url: 'some url',
        published_date: "",
        updated: "",
        byline: "",
        title: 'some title',
        abstract: ""
    }, {
        id: '2',
        url: 'some url',
        published_date: "",
        updated: "",
        byline: "",
        title: 'some title',
        abstract: ""
    }];

    nock(MOST_POPULAR_BASE_URL).get(`/viewed/${lookupDays}.json?api-key=${config.NYT_API_KEY}`).reply(200, {
        results: data
    });

    await act(async () => render(<Provider store={store}>
        <ArticleList lookupDays={lookupDays} onListChange={handleListChange}/>
    </Provider>));

    setTimeout(() => {
        const ArticleListElement = screen.getByTestId('data-ArticleList');

        for (let i = 0; i < data.length; i++) {
            const ArticleCardElement = screen.getByTestId(data[i].id);
            expect(ArticleListElement).toContainElement(ArticleCardElement);
        }
    }, 5000)

});
