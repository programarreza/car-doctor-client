import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import BookingRow from "./BookingRow";


const Bookings = () => {
	const { user } = useContext(AuthContext)
	const [bookings, setBookings] = useState([])
	const axiosSecure = useAxiosSecure();

	// const url = `http://localhost:5000/bookings/?email=${user?.email}`;
	const url = `/bookings/?email=${user?.email}`;
	useEffect(() => {

		axiosSecure.get(url)
			.then(res => setBookings(res.data))
	}, [url, axiosSecure])

	const handleDelete = (id) => {
		const proceed = confirm('Are You sure want to delete')
		if (proceed) {
			fetch(`http://localhost:5000/bookings/${id}`, {
				method: 'DELETE',
			})
				.then(res => res.json())
				.then(data => {
					console.log(data);
					if (data.deletedCount > 0) {
						const remaining = bookings.filter(booking => booking._id !== id);
						setBookings(remaining);
						alert('deleted Successfully')
					}
				})
		}
	}

	const handleBookingConform = id => {
		fetch(`http://localhost:5000/bookings/${id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ status: 'confirm' })
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				if (data.modifiedCount > 0) {
					const remaining = bookings.filter(booking => booking._id !== id)
					const update = bookings.find(booking => booking._id === id);
					update.status = 'confirm'
					const newBookings = [update, ...remaining]
					setBookings(newBookings)
				}
			})
	}

	return (
		<div>
			<h2 className="text-3xl">Your Booking : {bookings.length}</h2>

			<div className="overflow-x-auto">
				<table className="table">
					{/* head */}
					
					<tbody >
						
						{
							bookings.map(booking => <BookingRow key={booking._id} booking={booking} handleDelete={handleDelete} handleBookingConform={handleBookingConform}></BookingRow>)
						}

					</tbody>

				</table>
				
			</div>
		</div>
	);
};

export default Bookings;