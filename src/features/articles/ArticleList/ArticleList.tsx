import {useEffect, useState, memo} from 'react';
import map from "lodash/map";
import ArticleCard from "../ArticleCard/ArticleCard";
import {
    ArticleRT,
    fetchMostPopularArticlesFromCache,
    LookupDays,
    DataSource,
    useFetchMostPopularArticlesQuery
} from "../mostPopularArticleApiSlice";
import {ArticlesStacked} from "./ArticleListStyledComponets";
import isEmpty from "lodash/isEmpty";
import Notification from "../../../components/Notification/Notification";

let dataToSet:Array<ArticleRT> = [], dataSourceToSet = DataSource.NONE;

function ArticleList({lookupDays, onListChange}: {lookupDays: LookupDays, onListChange: (v: DataSource)=>void}) {
    const [articlesData, setArticlesData] = useState<Array<ArticleRT>>([]);
    const [dataSourceType, setDataSourceType] = useState<DataSource>(DataSource.NONE);

    const {data = [], isFetching, isError} = useFetchMostPopularArticlesQuery(lookupDays)

    useEffect(()=>{
        (async function (){
            dataToSet = [];
            dataSourceToSet = DataSource.NONE;
            if (isFetching === false && !isEmpty(data) && !isError){
                dataToSet = data;
                dataSourceToSet = DataSource.API;
            } else {
                const cacheResponse = await fetchMostPopularArticlesFromCache(lookupDays);
                if (!isEmpty(cacheResponse) && isEmpty(dataToSet)){
                    dataToSet = cacheResponse!;
                    dataSourceToSet = DataSource.CACHE;
                }
            }
            setArticlesData(dataToSet);
            setDataSourceType(dataSourceToSet);
            onListChange(dataSourceToSet);
        })()
    }, [isFetching, lookupDays])

    return (
        <div data-testid="data-ArticleList">
            <ArticlesStacked spacing={2}>
                {
                    map(articlesData, v => {
                        return <ArticleCard key={v.id} data={v}/>
                    })
                }
            </ArticlesStacked>
            <Notification message={dataSourceType === DataSource.CACHE ? "Articles loaded from cache"
                : (dataSourceType === DataSource.API ? "Live articles loaded from internet" : "")} />
        </div>
    );
}

export default memo(ArticleList);
