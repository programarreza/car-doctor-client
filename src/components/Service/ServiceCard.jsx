import PropTypes from 'prop-types';
import { AiOutlineArrowRight } from 'react-icons/ai';


const ServiceCard = ({ service }) => {
	const { img, price, title } = service;
	return (
		<div>
			<div className="card glass">
				<figure><img src={img} alt="car!" className="h-[250px]" /></figure>
				<div className="card-body">
					<h2 className="card-title">{title}</h2>
					<div className="flex text-[#FF3811]">
						<p className="text-xl font-semibold">Price: ${price}</p>
						<div className="card-actions justify-end">
							<button className="btn "><AiOutlineArrowRight /></button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServiceCard;

ServiceCard.propTypes = {
	service: PropTypes.node,
}