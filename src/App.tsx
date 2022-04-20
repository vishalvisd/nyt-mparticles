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
import {AppContainer} from "./components/AppStyled/AppStyled"

export enum dataSource {NONE, CACHE, API}
let dataToSet:Array<ArticleRT> = [], dataSourceToSet = dataSource.NONE;

function App() {
    const [lookupDays, setLookupDays] = useState<LookupDays>(LookupDays.Seven);
    const [articlesData, setArticlesData] = useState<Array<ArticleRT>>([]);
    const [dataSourceType, setDataSourceType] = useState<dataSource>(dataSource.NONE);
    const {data = [], isFetching, isError} = useFetchMostPopularArticlesQuery(lookupDays)

    useEffect(()=>{
        dataToSet = [];
        dataSourceToSet = dataSource.NONE;
        async function dataFetch(){
            if (isFetching === false && !isEmpty(data) && !isError){
                dataToSet = data;
                dataSourceToSet = dataSource.API;
            } else {
                const cacheResponse = await fetchMostPopularArticlesFromCache(lookupDays);
                if (!isEmpty(cacheResponse) && isEmpty(dataToSet)){
                    dataToSet = cacheResponse!;
                    dataSourceToSet = dataSource.CACHE;
                }
            }
            setArticlesData(dataToSet);
            setDataSourceType(dataSourceToSet);
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
