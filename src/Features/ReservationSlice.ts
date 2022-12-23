import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ReservationItemType = {
	id: number;
	name: string;
};

type initialStateType = {
	value: ReservationItemType[];
};

const initialState: initialStateType = {
	value: [],
};

const reservationsSlice = createSlice({
	name: 'reservation',
	initialState,
	reducers: {
		addReservation: (state, action: PayloadAction<string>) => {
			const data: ReservationItemType = {
				id: (state.value.at(-1)?.id && +1) || 1,
				name: action.payload,
			};
			state.value.push(data);
			console.log('Reset');
		},
		deleteReservation: (state, action: PayloadAction<number>) => {
			state.value = state.value.filter((e) => e.id !== action.payload);
		},
	},
});

export const { addReservation, deleteReservation } = reservationsSlice.actions;
export default reservationsSlice.reducer;
