import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteReservation } from '../Features/ReservationSlice';

interface IProps {
	name: string;
	id: number;
}

export const Reservation = ({ name, id }: IProps) => {
	const dispatch = useDispatch();
	const handleClick = () => {
		dispatch(deleteReservation(id));
	};
	return (
		<div onClick={handleClick} className='reservation-card-container'>
			{name}
		</div>
	);
};
