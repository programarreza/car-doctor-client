import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
// import { AuthContext } from "../../AuthProvider/AuthProvider";
// import { useContext } from "react";

const Register = () => {
	const {createUser}  = useAuth();
	// const { createUser } = useContext(AuthContext)

	const handlerRegister = (e) => {
		e.preventDefault();
		const form = new FormData(e.currentTarget)
		const name = form.get('name')
		const email = form.get('email')
		const password = form.get('password')
		console.log(name, email, password);

		createUser(email, password)
			.then(result => {
				console.log(result.user);
				// toast.success('Registration Successfully')
			})
			.catch(error => {
				console.error(error)
			})

	}

	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content flex-col lg:flex-row">
				<div className="w-1/2 mr-12">
					<img src="https://i.postimg.cc/LsY1P2Rj/login.jpg" className="w-full" alt="" />
				</div>

				<div className="card flex-shrink-0 w-1/2 shadow-2xl bg-base-100">
					<form onSubmit={handlerRegister} className="card-body ">
						<h1 className="text-3xl text-center font-bold">Sign Up </h1>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Name</span>
							</label>
							<input type="text" name="name" placeholder="Name" className="input input-bordered" required />
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input type="email" name="email" placeholder="email" className="input input-bordered" required />
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Password</span>
							</label>
							<input type="password" name="password" placeholder="password" className="input input-bordered" required />

						</div>
						<div className="form-control mt-6">
							<button type="submit" className="btn bg-[#FF3811] hover:bg-[#fa5f40] text-white">Sign Up</button>
						</div>

						<p className="text-center">Already Have an Account ? <Link to={"/login"} className="btn-link text-[#FF3811] font-semibold">Login</Link></p>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;