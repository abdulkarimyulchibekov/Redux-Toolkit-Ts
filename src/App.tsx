import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './App/Store';
import { Reservation } from './components/ReservationItem';
import { addReservation } from './Features/ReservationSlice';
import './App.css';

function App() {
	const reservation = useSelector(
		(state: RootState) => state.reservation.value,
	);

	console.log(reservation);

	const inputRef: any = useRef(null);
	const dispatch = useDispatch();

	const handleClick = () => {
		if (inputRef.current.value) {
			dispatch(addReservation(inputRef.current.value));
			inputRef.current.value = '';
		}
	};

	return (
		<div className='App'>
			<div className='container'>
				<div className='reservation-container'>
					<div>
						<h5 className='reservation-header'>Reservations</h5>
						<div className='reservation-cards-container'>
							{reservation.map((e) => (
								<Reservation id={e.id} key={e.id} name={e.name} />
							))}
						</div>
					</div>
					<div className='reservation-input-container'>
						<input ref={inputRef} />
						<button onClick={handleClick}>Add</button>
					</div>
				</div>
				<div className='customer-food-container'>
					<div className='customer-food-card-container'>
						<p>Selena Gomez</p>
						<div className='customer-foods-container'>
							<div className='customer-food'></div>
							<div className='customer-food-input-container'>
								<input />
								<button>Add</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
