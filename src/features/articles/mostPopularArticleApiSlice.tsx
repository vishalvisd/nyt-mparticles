import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const NYT_API_KEY = "9Az9tpzyQCUlS8MLG1TEw1mcwlNvdAp6";
const MOST_POPULAR_BASE_URL = "https://api.nytimes.com/svc/mostpopular/v2"

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

export const mostPopularArticleApiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: MOST_POPULAR_BASE_URL
    }),
    endpoints(builder) {
        return {
            fetchMostPopularArticles: builder.query<Array<ArticleRT>, LookupDays | void>({
                query(lookupDays = LookupDays.Seven){
                    return `/viewed/${lookupDays}.json?api-key=${NYT_API_KEY}`
                },
                transformResponse: (response: { results: Array<ArticleRT> }) => response.results,
            })
        }
    }
});

export const {useFetchMostPopularArticlesQuery} = mostPopularArticleApiSlice;

export async function fetchMostPopularArticlesFromCache(lookupDays:LookupDays = LookupDays.Seven): Promise<Array<ArticleRT> | undefined>{
    if ("caches" in window){
        const response = await caches.match(`${MOST_POPULAR_BASE_URL}/viewed/${lookupDays}.json?api-key=${NYT_API_KEY}`);
        if (response){
            return response.json().then((res: { results: Array<ArticleRT> }) => res.results)
        }
    }
}
