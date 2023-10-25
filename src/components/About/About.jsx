
const About = () => {
	return (
		<div>
			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content flex-col lg:flex-row ">
					<div className="w-1/2 relative">
						<img src="https://i.postimg.cc/CxXKrdW6/person.jpg" className="w-3/4 rounded-lg shadow-2xl" />
						<img src="https://i.postimg.cc/Cxz14b6q/parts.jpg" className="w-1/2 rounded-lg shadow-2xl absolute right-5 top-1/2 border-8 border-white" />
					</div>
					<div className="w-1/2">
						<h2 className="text-3xl text-orange-500 font-bold">About Us</h2>
						<h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
						<p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
						<p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
						<button className="btn btn-primary">Get More Info</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;