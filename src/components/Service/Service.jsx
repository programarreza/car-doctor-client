import { useState } from "react";
import useServices from "../../hooks/useServices";
import ServiceCard from "./ServiceCard";

// DRY ==> Do Not Repeat Yourself
const Service = () => {
	const [asc, setAsc] = useState(true)
	// const [min, setMin] = useState(undefined)
	// const [max, setMax] = useState(undefined)
	const [search, setSearch] = useState("")
	const services = useServices(asc, search);

	const handleSearch = (e) => {
		e.preventDefault();
		const searchText = e.target.search.value;
		setSearch(searchText);
	}

	return (
		<div>
			<div className="text-center space-y-5 my-12">
				<h3 className="text-[#FF3811] text-xl font-bold">Service</h3>
				<h2 className="text-5xl font-bold">Our Service Area</h2>
				<p>the majority have suffered alteration in some form, by injected humour, or randomised <br />words which do not look even slightly believable. </p>
				<form onSubmit={handleSearch}>
					<input type="text"  className="rounded-lg border-2  py-2" name="search" />
					<input type="submit" value="Search" className="btn"/>
				</form>
				<button className="btn btn-primary" onClick={() => setAsc(!asc)}>
					{asc ? "Price: High to Low" : "Price: Low to High"}</button>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{
					services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
				}
			</div>
		</div>
	);
};

export default Service;