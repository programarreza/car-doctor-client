import { Outlet } from "react-router-dom";
import Navbar from "../components/Headers/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
	return (
		<div className="max-w-7xl mx-auto font-grotesk">
			<Navbar></Navbar>
			<Outlet></Outlet>
			<Footer></Footer>
			<Toaster/>
		</div>
	);
};

export default MainLayout;