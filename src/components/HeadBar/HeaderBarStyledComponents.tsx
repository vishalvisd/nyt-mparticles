import {ReactElement, ReactNode} from "react";
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export const BarWithLoader = styled(({children, isLoading}:{children: ReactNode, isLoading: boolean}):ReactElement=>{
    return <AppBar position="fixed">
        <Toolbar>{children}</Toolbar>
        {
            isLoading ? <Box sx={{ width: '100%' }}>
                <LinearProgress data-testid="data-HeaderBar-LinearProgress"/>
            </Box> : null
        }
    </AppBar>
})(()=>({
    right: "auto",
    maxWidth: "1400px"
}));
