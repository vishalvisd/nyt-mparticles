import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import Typography from "@mui/material/Typography";

export const AppContainer = styled(Box)({
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    maxWidth: "1400px",
    margin: "0 auto"
});

export const BrandTitle = styled(()=>{
    return <Typography variant="h5" component="div" sx={{ flexGrow: 1, textAlign: "left" }}>
        NYT Most Popular
    </Typography>
})()

