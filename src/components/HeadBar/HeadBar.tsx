import {useState, MouseEvent} from 'react';
import map from "lodash/map";
import filter from "lodash/filter";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LinearProgress from '@mui/material/LinearProgress';
import Button from "@mui/material/Button";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from "@mui/material/Tooltip";
import {LookupDays} from "../../features/articles/mostPopularArticleApiSlice";

export default function HeadBar({loading, onMenuItemClick}: {loading: boolean, onMenuItemClick: (e:LookupDays)=>void}) {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return (
        <Box data-testid="data-HeaderBar" sx={{ flexGrow: 1 }}>
            <AppBar style={{right: "auto", maxWidth: "1400px"}} position="fixed">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: "left" }}>
                        NYT Most Popular
                    </Typography>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                                <Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={handleOpenNavMenu} >
                                    Lookback
                                </Button>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                        >
                            {
                                map(filter(LookupDays, item=>!isNaN(Number(item))), v => {
                                    return <MenuItem key={v} onClick={()=>onMenuItemClick(v)}>
                                        <Typography textAlign="center">{v} day{v !== 1 ? 's': ''}</Typography>
                                    </MenuItem>
                                })
                            }
                        </Menu>
                    </Box>
                </Toolbar>
                {
                    loading ? <Box sx={{ width: '100%' }}>
                        <LinearProgress data-testid="data-HeaderBar-LinearProgress"/>
                    </Box> : ""
                }
            </AppBar>
        </Box>
    );
}