import React, {lazy, Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import {store} from './app/store'
import './index.css'
import {SuspenseBackground} from './components/AppStyled/AppStyled';

const App = lazy(() => import('./App'))

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <Suspense fallback={<SuspenseBackground/>}>
                <App/>
            </Suspense>
        </Provider>
    </React.StrictMode>
)


if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/sw.js')
        .then(() => console.log('Service worker registered!'))
        .catch(err => console.log('Service worker error', err));
}
