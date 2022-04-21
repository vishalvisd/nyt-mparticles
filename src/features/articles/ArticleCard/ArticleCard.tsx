import {memo} from "react";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {ArticleRT} from "../mostPopularArticleApiSlice";
import {ArticleStyledCard} from "./ArticleCardStyledComponents";
import isEmpty from "lodash/isEmpty";

function ArticleCard({data}:{data:ArticleRT}) {
    const handleArticleClick = (article:ArticleRT)=>{
        // @ts-ignore
        window.open(article.url, '_blank').focus();
    }
    if (isEmpty(data.url) || isEmpty(data.title)){
        return null;
    }
    return (
        <ArticleStyledCard data-testid={data.id} raised={true} onClick={()=>handleArticleClick(data)}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {data.published_date}
                </Typography>
                <Typography variant="h5" component="div">
                    {data.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {data.abstract}
                </Typography>
                <Typography variant="body2">
                    {data.byline}
                </Typography>
            </CardContent>
        </ArticleStyledCard>
    );
}

export default memo(ArticleCard);
