import { configureStore } from '@reduxjs/toolkit';
import reservationReducer from '../Features/ReservationSlice';

export const store = configureStore({
	reducer: {
		reservation: reservationReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
