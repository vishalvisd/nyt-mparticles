import { memo, MouseEvent, useState } from 'react';
import map from 'lodash/map';
import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

export type MenuBarOptions = Array<{ value: string, label: string }>

function MenuBar(
    {label, options, onItemClick}: { label: string, options: MenuBarOptions, onItemClick: (v: string) => void }
) {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => setAnchorElNav(event.currentTarget);
    const handleCloseNavMenu = () => setAnchorElNav(null);

    const handleOnMenuItemClick = (v: string) => {
        handleCloseNavMenu();
        onItemClick(v);
    };

    const renderMenu = (screenSize: string) => <Menu
        id={`menu-appbar-${screenSize}`}
        anchorEl={anchorElNav}
        anchorOrigin={{vertical: 'bottom', horizontal: 'left',}}
        keepMounted
        transformOrigin={{vertical: 'top', horizontal: 'left',}}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{display: {xs: screenSize === 'xs' ? 'block' : 'none', md: screenSize === 'md' ? 'block' : 'none'},}}>
        {map(options, v => {
            return <MenuItem key={v.value} onClick={() => handleOnMenuItemClick(v.value)}>
                <Typography textAlign='center'>{v.label}</Typography>
            </MenuItem>
        })}</Menu>

    return (
        <><Box sx={{flexGrow: 0, display: {xs: 'flex', md: 'none'}}}>
            <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleOpenNavMenu}
                color='inherit'
            >≣</IconButton>{renderMenu('xs')}</Box>
            <Box sx={{flexGrow: 0, display: {xs: 'none', md: 'flex'}}}>
                <Tooltip title={label}>
                    <Button sx={{my: 2, color: 'white', display: 'block'}}
                            onClick={handleOpenNavMenu}> {label} </Button>
                </Tooltip>{renderMenu('md')}</Box></>
    );
}

export default memo(MenuBar);
