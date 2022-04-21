import {MouseEvent, useState, memo} from 'react';
import map from "lodash/map";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {IconButton} from "@mui/material";

export type MenuBarOptions = Array<{
    value: string,
    label: string
}>

function MenuBar(
    {label, options, onItemClick}: { label: string, options: MenuBarOptions, onItemClick: (v: string) => void }
){
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleOnMenuItemClick = (v: string) => {
        handleCloseNavMenu();
        onItemClick(v);
    };

    return (
        <>
            <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                >
                    ≣
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                    }}
                >
                    {
                        map(options, v => {
                            return <MenuItem key={v.value} onClick={() => handleOnMenuItemClick(v.value)}>
                                <Typography textAlign="center">{v.label}</Typography>
                            </MenuItem>
                        })
                    }
                </Menu>
            </Box>
            <Box sx={{flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                <Tooltip title={ label }>
                    <Button sx={{my: 2, color: 'white', display: 'block'}} onClick={handleOpenNavMenu}> { label } </Button>
                </Tooltip>
                <Menu
                    sx={{mt: '45px', display: { xs: 'none', md: 'flex' }}}
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
                        map(options, v => {
                            return <MenuItem key={v.value} onClick={() => handleOnMenuItemClick(v.value)}>
                                <Typography textAlign="center">{v.label}</Typography>
                            </MenuItem>
                        })
                    }
                </Menu>
            </Box>
        </>
    );
}

export default memo(MenuBar);
