// WARNING: DO NOT DELETE ANY BOILERPLATE COMMENTS IN THIS FILE (start with //-- )
// IF YOU DO, GENERATED REDUCERS WILL NOT BE WIRED UP AUTOMATICALLY.

import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import CounterSlice from './counter/slice';
//-- importRef
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    counter: CounterSlice,
    //-- reducerRef
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
