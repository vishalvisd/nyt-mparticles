import { configureStore } from '@reduxjs/toolkit';
import {
  mostPopularArticleApiSlice,
} from '../features/articles/mostPopularArticleApiSlice';

export const store = configureStore({
    reducer: {
        [mostPopularArticleApiSlice.reducerPath]: mostPopularArticleApiSlice.reducer
    },
    middleware: (getDefaultMiddleware => {
        return getDefaultMiddleware().concat(mostPopularArticleApiSlice.middleware)
    })
});
