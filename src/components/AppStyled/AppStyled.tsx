import { memo } from 'react';
import Box from '@mui/material/Box';
import { keyframes } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

export const AppContainer = styled(Box)({
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    maxWidth: '1400px',
    margin: '0 auto'
});

export const BrandTitle = memo(() => <Typography variant='h5' component='div' sx={{
    flexGrow: 1,
    textAlign: 'left',
    lineHeight: '68px',
    verticalAlign: 'middle'
}}>
    NYT Most Popular
</Typography>)

const suspensepulseAnimation = keyframes`
  0% {background-color: #eee;}
  25% {background-color: #ddd;}
  50% {background-color: #ccc;}
  75% {background-color: #ddd;}
  100% {background-color: #eee;}
`

export const SuspenseBackground = styled('div')({
    width: '100vw',
    height: '100vh',
    position: 'absolute',
    backgroundColor: '#eee',
    animationName: suspensepulseAnimation,
    animationDuration: '1.5s',
    animationIterationCount: 'infinite',
});
