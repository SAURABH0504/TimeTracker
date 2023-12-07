import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./slices/projectsSlice";
import timerReducer from './slices/timerSlice';
import { persistReducer, persistStore } from 'redux-persist';
import { thunk } from "redux-thunk";
import AsyncStorage from '@react-native-async-storage/async-storage';



const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

export const store = configureStore({
  reducer: {
    projects: persistReducer(persistConfig,projectReducer),
    timer: persistReducer(persistConfig,timerReducer),
  },
  middleware: [thunk]
});

export const persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
