import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import CounterSlice from './counter/slice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    app: CounterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
