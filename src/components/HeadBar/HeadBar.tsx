import {memo} from 'react';
import map from 'lodash/map';
import filter from 'lodash/filter';
import Box from '@mui/material/Box';
import {LookupDays} from '../../features/articles/mostPopularArticleApiSlice';
import {BrandTitle} from '../AppStyled/AppStyled';
import {BarWithLoader} from './HeaderBarStyledComponents';
import MenuBar, {MenuBarOptions} from '../MenuBar/MenuBar';

function HeadBar({loading, onMenuItemClick}: { loading: boolean, onMenuItemClick: (e: LookupDays) => void }) {
    const handleOnMenuItemClick = (v: string) => {
        onMenuItemClick(Number(v));
    };

    const numberFromLookupDaysEnum = filter(LookupDays, item => !isNaN(Number(item)));
    const menuItems: MenuBarOptions = map(numberFromLookupDaysEnum, v => ({
        value: `${v}`,
        label: `${v} day${v !== 1 ? 's' : ''}`
    }));

    return (
        <Box data-testid='data-HeaderBar' sx={{flexGrow: 1}}>
            <BarWithLoader isLoading={loading}>
                <BrandTitle/>
                <MenuBar options={menuItems} label='Lookback' onItemClick={handleOnMenuItemClick}/>
            </BarWithLoader>
        </Box>
    );
}

export default memo(HeadBar);
