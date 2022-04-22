import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';

export const ArticleStyledCard = styled(Card)(() => ({
    cursor: 'pointer',
    backgroundImage: 'linear-gradient(#eee, #ddd)',
    borderRadius: '0px',
    flexGrow: 1
}));
