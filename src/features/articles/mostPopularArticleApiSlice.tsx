import get from "lodash/get";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import config from '../../apiConfig.json'
import fetch from "isomorphic-fetch";

const MOST_POPULAR_BASE_URL = `${get(config, "NYT_API_BASE_URLS.BASE")}/${get(config, "NYT_API_BASE_URLS.MOST_POPULAR")}`;

export interface ArticleRT {
    id: string;
    url:string;
    published_date: string;
    updated: string;
    byline: string;
    title: string;
    abstract: string;
}

export enum LookupDays {
    One= 1,
    Seven = 7,
    Month = 30
}

export enum DataSource {NONE, CACHE, API}

export const mostPopularArticleApiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: MOST_POPULAR_BASE_URL,
        fetchFn: fetch
    }),
    endpoints(builder) {
        return {
            fetchMostPopularArticles: builder.query<Array<ArticleRT>, LookupDays | void>({
                query(lookupDays = LookupDays.Seven){
                    return `/viewed/${lookupDays}.json?api-key=${config.NYT_API_KEY}`
                },
                transformResponse: (response: { results: Array<ArticleRT> }) => response.results,
            })
        }
    }
});

export const {useFetchMostPopularArticlesQuery} = mostPopularArticleApiSlice;

export async function fetchMostPopularArticlesFromCache(lookupDays:LookupDays = LookupDays.Seven): Promise<Array<ArticleRT> | undefined>{
    if ("caches" in window){
        const response = await caches.match(`${MOST_POPULAR_BASE_URL}/viewed/${lookupDays}.json?api-key=${config.NYT_API_KEY}`);
        if (response){
            return response.json().then((res: { results: Array<ArticleRT> }) => res.results)
        }
    }
}
