import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

	const navLinks = <div className="flex gap-6 text-lg font-semibold">
		<NavLink
			to="/"
			className={({ isActive, isPending }) =>
				isPending ? "pending" : isActive ? "text-gray-400 underline" : ""
			}
		>
			Home
		</NavLink>
		<NavLink
			to="/about"
			className={({ isActive, isPending }) =>
				isPending ? "pending" : isActive ? "text-gray-400 underline" : ""
			}
		>
			About
		</NavLink>
		<NavLink
			to="/services"
			className={({ isActive, isPending }) =>
				isPending ? "pending" : isActive ? "text-gray-400 underline" : ""
			}
		>
			Services
		</NavLink>
		<NavLink
			to="/blog"
			className={({ isActive, isPending }) =>
				isPending ? "pending" : isActive ? "text-gray-400 underline" : ""
			}
		>
			Blog
		</NavLink>
		<NavLink
			to="/contact"
			className={({ isActive, isPending }) =>
				isPending ? "pending" : isActive ? "text-gray-400 underline" : ""
			}
		>
			Contact
		</NavLink>
	</div >
	return (
		<div className="navbar bg-base-100">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
					</label>
					<ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
						{navLinks}
					</ul>
				</div>
				<Link to={"/"}>
					<img src={'https://i.postimg.cc/KzPLhZv7/logo.jpg'} className="w-14" alt="logo" />
				</Link>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					{navLinks}
				</ul>
			</div>
			<div className="navbar-end">
				<Link to="/">
				<button className="btn btn-outline btn-primary">Appointment</button>
				</Link>

			</div>
		</div>
	);
};

export default Navbar;