import { lazy, Suspense, useCallback, useState } from 'react';
import {
  AppContainer, SuspenseBackground,
} from './components/AppStyled/AppStyled';
import GeneralErrorBoundary
  from './components/ErrorBoundary/GeneralErrorBoundary';
import HeadBar from './components/HeadBar/HeadBar';
import {
  DataSource, LookupDays,
} from './features/articles/mostPopularArticleApiSlice';

const ArticleList = lazy(() => import('./features/articles/ArticleList/ArticleList'))

function App() {
    const [lookupDays, setLookupDays] = useState<LookupDays>(LookupDays.Seven);
    const [dataSourceType, setDataSourceType] = useState<DataSource>(DataSource.NONE)

    const handleMenuItemClick = useCallback(setLookupDays, [dataSourceType]);
    const handleListChange = useCallback(setDataSourceType, [lookupDays]);

    return (
        <AppContainer data-testid='data-app'>
            <GeneralErrorBoundary>
                <HeadBar loading={dataSourceType !== DataSource.API} onMenuItemClick={handleMenuItemClick}/>
                <Suspense fallback={<SuspenseBackground/>}>
                    <ArticleList lookupDays={lookupDays} onListChange={handleListChange}/>
                </Suspense>
            </GeneralErrorBoundary>
        </AppContainer>
    )
}

export default App
