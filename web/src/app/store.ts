import { configureStore } from '@reduxjs/toolkit';
import { personListsSlice } from './slices/personListsSlice';

export const store = configureStore({
    reducer: {
        personLists: personListsSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
