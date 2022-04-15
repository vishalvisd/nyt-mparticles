import {useState, useEffect} from 'react';
import isEmpty from "lodash/isEmpty";
import {
    useFetchMostPopularArticlesQuery,
    fetchMostPopularArticlesFromCache,
    ArticleRT,
    LookupDays
} from "./features/articles/mostPopularArticleApiSlice";
import * as React from "react";
import HeadBar from "./components/HeadBar/HeadBar";
import ArticleList from "./features/articles/ArticleList/ArticleList"
import AppContainer from "./components/AppContainerStyled/AppContainerStyled"

export enum dataSource {NONE, CACHE, API}

function App() {
    const [lookupDays, setLookupDays] = useState<LookupDays>(LookupDays.Seven);
    const [articlesData, setArticlesData] = useState<Array<ArticleRT>>([]);
    const [dataSourceType, setDataSourceType] = useState<dataSource>(dataSource.NONE);
    const {data = [], isFetching, isLoading, isError} = useFetchMostPopularArticlesQuery(lookupDays)

    useEffect(()=>{
        async function dataFetch(){
            if (isFetching === false && !isEmpty(data)){
                setArticlesData(data);
                setDataSourceType(dataSource.API);
            }
           const cacheResponse = await fetchMostPopularArticlesFromCache(lookupDays);
            if (!isEmpty(cacheResponse) && (isFetching === false && isEmpty(data))){
                setArticlesData(cacheResponse!);
                setDataSourceType(dataSource.CACHE);
            }
        }
        dataFetch();
    }, [isFetching, lookupDays])

    return (
        <AppContainer data-testid="data-app">
            <HeadBar loading={dataSourceType !== dataSource.API} onMenuItemClick={setLookupDays}/>
            <ArticleList data={articlesData} dataSourceType={dataSourceType}/>
        </AppContainer>
    )
}

export default App
