import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
// import { AuthContext } from "../../AuthProvider/AuthProvider";
// import { useContext } from "react";
// import { toast } from "react-hot-toast";

const Login = () => {
	const { login } = useAuth();
	// const { login } = useContext(AuthContext)
	const location = useLocation()
	const navigate = useNavigate()
	console.log(location);

	const handleLogin = (e) => {
		e.preventDefault();
		const form = new FormData(e.currentTarget)
		const email = form.get('email')
		const password = form.get('password')
		// console.log(email, password);

		login(email, password)
			.then(result => {
				const loggedInUser = result.user;
				console.log(loggedInUser);
				const user = { email };
				// get access token
				axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
					.then(res => {
						console.log(res.data);
						if (res.data.success) {
							navigate(location?.state ? location?.state : '/')

						}
					})

			})
			.catch(error => {
				console.log(error);
			})

	}

	return (
		<div>
			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content flex-col lg:flex-row">
					<div className="w-1/2 mr-12">
						<img src="https://i.postimg.cc/LsY1P2Rj/login.jpg" className="w-full" alt="" />
					</div>

					<div className="card flex-shrink-0 w-1/2 shadow-2xl bg-base-100">
						<form onSubmit={handleLogin} className="card-body ">
							<h1 className="text-3xl text-center font-bold">Sign In </h1>
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
								<label className="label">
									<a href="#" className="label-text-alt link link-hover">Forgot password?</a>
								</label>
							</div>
							<div className="form-control mt-6">
								<button type="submit" className="btn bg-[#FF3811] hover:bg-[#fa5f40] text-white">Sign In</button>
							</div>

							<p className="text-center">Have an Account ? <Link to={"/register"} className="btn-link text-[#FF3811] font-semibold">Sign Up</Link></p>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;