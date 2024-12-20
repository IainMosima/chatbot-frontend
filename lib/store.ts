import { configureStore } from '@reduxjs/toolkit';
import NavbarReducer from './reducers/NavbarReducer'
export const store = configureStore({
    reducer:{
        navbar: NavbarReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;