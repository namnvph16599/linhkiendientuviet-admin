import { configureStore } from '@reduxjs/toolkit';
import acountReducer from '../slices/count';
export const store = configureStore({
    reducer: {
        // users: usersReducer,
        count: acountReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
