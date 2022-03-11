import { configureStore } from '@reduxjs/toolkit';
import { personsSlice } from '../features/person/personsSlice';

export const store = configureStore({
    reducer: {
        persons: personsSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
