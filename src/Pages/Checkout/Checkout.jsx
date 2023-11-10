import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
// import { toast } from "react-hot-toast";

const Checkout = () => {
	const service = useLoaderData();
	const { _id, title, price, img } = service;
	const { user } = useContext(AuthContext);


	const handleOrder = (e) => {
		e.preventDefault();
		const form = new FormData(e.currentTarget)
		const name = form.get('name')
		const date = form.get('date')
		const email = user?.email;
		const price = form.get('price')

		const order = {
			customerName: name,
			date,
			email,
			img,
			service: title,
			service_id: _id,
			price: parseInt(price),
		}
		console.log(order);

		fetch('http://localhost:5000/bookings', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(order)
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				if (data.insertedId) {
					// toast.success("service book successfully")
				}
			})

	}
	return (
		<div className="p-24">
			<h2>Check Out: {title}</h2>
			<form onSubmit={handleOrder} className="card-body bg-[#F3F3F3] p-20 rounded-md">
				<div className="grid grid-cols-2 gap-6">
					<div className="form-control">
						<input type="text" name="name" defaultValue={user?.displayName} placeholder="Name" className="input input-bordered" required />
					</div>
					<div className="form-control ">
						<input type="date" name="date" className="input input-bordered" required />
					</div>

					<div className="form-control">
						<input type="email" name="email" defaultValue={user?.email} placeholder="Email" className="input input-bordered" required />
					</div>
					<div className="form-control ">
						<input type="text" name="price" defaultValue={price} className="input input-bordered" required />
					</div>

				</div>

				<div className="form-control mt-6 ">
					<input type="submit" value="Order Confirm" className="py-2 cursor-pointer rounded-md bg-[#FF3811] hover:bg-[#f85636] text-white" />
				</div>
			</form>
		</div>
	);
};

export default Checkout;