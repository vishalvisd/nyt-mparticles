import { memo, useEffect, useState } from 'react';
import fill from 'lodash/fill';
import isEmpty from 'lodash/isEmpty';
import map from 'lodash/map';
import Notification from '../../../components/Notification/Notification';
import ArticleCard from '../ArticleCard/ArticleCard';
import {
  ArticleRT, DataSource, fetchMostPopularArticlesFromCache, LookupDays,
  useFetchMostPopularArticlesQuery,
} from '../mostPopularArticleApiSlice';
import { ArticlesStacked } from './ArticleListStyledComponets';

let dataToSet: Array<ArticleRT> = [], dataSourceToSet = DataSource.NONE;

function ArticleList({lookupDays, onListChange}: { lookupDays: LookupDays, onListChange: (v: DataSource) => void }) {
    const [articlesData, setArticlesData] = useState<Array<ArticleRT>>([]);
    const [dataSourceType, setDataSourceType] = useState<DataSource>(DataSource.NONE);

    const {data = [], isFetching, isError} = useFetchMostPopularArticlesQuery(lookupDays)

    useEffect(() => {
        (async function () {
            dataToSet = [];
            dataSourceToSet = DataSource.NONE;
            if (isFetching === false && !isEmpty(data) && !isError) {
                dataToSet = data;
                dataSourceToSet = DataSource.API;
            } else {
                const cacheResponse = await fetchMostPopularArticlesFromCache(lookupDays);
                if (!isEmpty(cacheResponse) && isEmpty(dataToSet)) {
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
        <div data-testid='data-ArticleList' style={{width: "100%"}}>
            <ArticlesStacked spacing={2}>
                {
                    !isEmpty(articlesData) ? map(articlesData, v => {
                        return <ArticleCard key={v.id} data={v}/>
                    }) : map(fill(Array(20), {loading: true, url: ".", title: "."} as ArticleRT), (v, i) => {
                        return <ArticleCard key={i} data={v}/>
                    })
                }
            </ArticlesStacked>
            <Notification message={dataSourceType === DataSource.CACHE ? 'Articles loaded from cache'
                : (dataSourceType === DataSource.API ? 'Live articles loaded from internet' : "")}/>
        </div>
    );
}

export default memo(ArticleList);
