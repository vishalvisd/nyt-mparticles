import { memo, ReactElement, ReactNode } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';

export const BarWithLoader = memo(styled(({children, isLoading}: { children: ReactNode, isLoading: boolean }): ReactElement => {
    return <AppBar position='fixed'>
        <Toolbar><Box style={{display: 'flex', width: '100%'}}
                      sx={{flexDirection: {xs: 'row-reverse', md: 'row'}}}>{children}</Box></Toolbar>
        {
            isLoading ? <Box sx={{width: '100%'}}>
                <LinearProgress data-testid='data-HeaderBar-LinearProgress'/>
            </Box> : null
        }
    </AppBar>
})(() => ({
    right: 'auto',
    maxWidth: '1400px'
})));
