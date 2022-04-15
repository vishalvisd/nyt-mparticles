import {useEffect, useState} from 'react';
import map from "lodash/map";
import Snackbar from '@mui/material/Snackbar';
import {dataSource} from "../../../App";
import ArticleCard from "../ArticleCard/ArticleCard";
import {ArticleRT} from "../mostPopularArticleApiSlice";
import {ArticlesStacked} from "./ArticleListStyledComponets";
import Slide, {SlideProps}  from '@mui/material/Slide';
type TransitionProps = Omit<SlideProps, 'direction'>;

function ArticleList({dataSourceType, data = []}: {dataSourceType:dataSource, data?: Array<ArticleRT>}) {
    const [showDataLoadedNotifier, setShowDataLoadedNotifier] = useState(false);

    useEffect(()=>{
        setShowDataLoadedNotifier(dataSourceType === dataSource.CACHE || dataSourceType === dataSource.API);
    }, [dataSourceType])

    return (
        <div data-testid="data-ArticleList">
            <ArticlesStacked spacing={2}>
                {
                    map(data, v => {
                        return <ArticleCard key={v.id} data={v}/>
                    })
                }
            </ArticlesStacked>
            <Snackbar
                open={showDataLoadedNotifier}
                autoHideDuration={3000}
                message={dataSourceType === dataSource.CACHE ? "Articles loaded from cache"
                    : (dataSourceType === dataSource.API ? "Live articles loaded from internet" : "")}
                TransitionComponent={(props: TransitionProps)=>{
                    return <Slide {...props} direction="right" />;
                }}
                onClose={() => {setShowDataLoadedNotifier(false)}}
            />
        </div>
    );
}

export default ArticleList;
