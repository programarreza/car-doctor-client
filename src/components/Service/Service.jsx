import useServices from "../../hooks/useServices";
import ServiceCard from "./ServiceCard";

// DRY ==> Do Not Repeat Yourself
const Service = () => {
	const services = useServices();

	return (
		<div>
			<div className="text-center space-y-5 my-12">
				<h3 className="text-[#FF3811] text-xl font-bold">Service</h3>
				<h2 className="text-5xl font-bold">Our Service Area</h2>
				<p>the majority have suffered alteration in some form, by injected humour, or randomised <br />words which do not look even slightly believable. </p>
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