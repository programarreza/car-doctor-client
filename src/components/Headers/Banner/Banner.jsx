// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import required modules
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
	return (
		// <>
		// 	<Swiper
		// 		spaceBetween={30}
		// 		centeredSlides={true}
		// 		autoplay={{
		// 			delay: 2500,
		// 			disableOnInteraction: false,
		// 		}}
		// 		pagination={{
		// 			clickable: true,
		// 		}}
		// 		navigation={true}
		// 		modules={[Pagination, Navigation]}
		// 		className="mySwiper"
		// 	>
		// 		<SwiperSlide className='relative bg-gradient-to-r from-indigo-500 '>
		// 			<img src="https://i.postimg.cc/13TmStBk/1.jpg" className='w-full h-[90vh]' alt="" />
		// 			<div className='absolute top-24 text-white'>
		// 				<div className="w-full h-full flex  justify-center items-center backdrop-brightness-50">
		// 					<span className="text-white text-4xl w-1/2 text-center">Here is an example of black overlay on an image</span>
		// 				</div>
		// 			</div>
		// 		</SwiperSlide>
		// 		<SwiperSlide>
		// 			<img src="https://i.postimg.cc/MKpqjRFk/2.jpg" className='w-full h-[90vh]' alt="" />
		// 		</SwiperSlide>
		// 		<SwiperSlide>
		// 			<img src="https://i.postimg.cc/JzX33ysx/3.jpg" className='w-full h-[90vh]' alt="" />
		// 		</SwiperSlide>
		// 		<SwiperSlide>
		// 			<img src="https://i.postimg.cc/0NTyYQJY/4.jpg" className='w-full h-[90vh]' alt="" />
		// 		</SwiperSlide>
		// 		<SwiperSlide>
		// 			<img src="https://i.postimg.cc/cCZ1zbh6/5.jpg" className='w-full h-[90vh]' alt="" />
		// 		</SwiperSlide>
		// 		<SwiperSlide>
		// 			<img src="https://i.postimg.cc/QM13rqH7/6.jpg" className='w-full h-[90vh]' alt="" />
		// 		</SwiperSlide>

		// 	</Swiper>
		// </>

		<div>
			<div className="carousel w-full">
				<div id="slide1" className="carousel-item relative w-full">
					<img src="https://i.postimg.cc/13TmStBk/1.jpg" className="w-full h-[90vh] rounded-xl" />
					<div className="absolute flex items-center h-full left-0 right-0 bottom-0 bg-gradient-to-r from-[#151515] to-[#15151500]">
						<div className="text-white space-y-7 pl-12 w-1/3">
							<h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
							<p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
							<div>
								<button className="btn btn-secondary mr-5">Secondary</button>
								<button className="btn btn-outline btn-secondary">Secondary</button>
							</div>
						</div>
					</div>
					<div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
						<a href="#slide4" className="btn btn-circle mr-5">❮</a>
						<a href="#slide2" className="btn btn-circle">❯</a>
					</div>
				</div>
				<div id="slide2" className="carousel-item relative w-full">
					<img src="https://i.postimg.cc/MKpqjRFk/2.jpg" className="w-full h-[90vh] rounded-xl" />
					<div className="absolute flex items-center h-full left-0 right-0 bottom-0 bg-gradient-to-r from-[#151515] to-[#15151500]">
						<div className="text-white space-y-7 pl-12 w-1/3">
							<h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
							<p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
							<div>
								<button className="btn btn-secondary mr-5">Secondary</button>
								<button className="btn btn-outline btn-secondary">Secondary</button>
							</div>
						</div>
					</div>
					<div className="absolute flex justify-end bottom-0 transform -translate-y-1/2 left-5 right-5 ">
						<a href="#slide1" className="btn btn-circle mr-5">❮</a>
						<a href="#slide3" className="btn btn-circle">❯</a>
					</div>
				</div>
				<div id="slide3" className="carousel-item relative w-full">
					<img src="https://i.postimg.cc/JzX33ysx/3.jpg" className="w-full h-[90vh] rounded-xl" />
					<div className="absolute flex items-center h-full left-0 right-0 bottom-0 bg-gradient-to-r from-[#151515] to-[#15151500]">
						<div className="text-white space-y-7 pl-12 w-1/3">
							<h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
							<p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
							<div>
								<button className="btn btn-secondary mr-5">Secondary</button>
								<button className="btn btn-outline btn-secondary">Secondary</button>
							</div>
						</div>
					</div>
					<div className="absolute flex justify-end bottom-0 transform -translate-y-1/2 left-5 right-5 ">
						<a href="#slide2" className="btn btn-circle mr-5">❮</a>
						<a href="#slide4" className="btn btn-circle">❯</a>
					</div>
				</div>
				<div id="slide4" className="carousel-item relative w-full">
					<img src="https://i.postimg.cc/0NTyYQJY/4.jpg" className="w-full h-[90vh] rounded-xl" />
					<div className="absolute flex items-center h-full left-0 right-0 bottom-0 bg-gradient-to-r from-[#151515] to-[#15151500]">
						<div className="text-white space-y-7 pl-12 w-1/3">
							<h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
							<p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
							<div>
								<button className="btn btn-secondary mr-5">Secondary</button>
								<button className="btn btn-outline btn-secondary">Secondary</button>
							</div>
						</div>
					</div>
					<div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
						<a href="#slide3" className="btn btn-circle mr-5">❮</a>
						<a href="#slide5" className="btn btn-circle">❯</a>
					</div>
				</div>
				<div id="slide5" className="carousel-item relative w-full">
					<img src="https://i.postimg.cc/cCZ1zbh6/5.jpg" className="w-full h-[90vh] rounded-xl" />
					<div className="absolute flex items-center h-full left-0 right-0 bottom-0 bg-gradient-to-r from-[#151515] to-[#15151500]">
						<div className="text-white space-y-7 pl-12 w-1/3">
							<h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
							<p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
							<div>
								<button className="btn btn-secondary mr-5">Secondary</button>
								<button className="btn btn-outline btn-secondary">Secondary</button>
							</div>
						</div>
					</div>
					<div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
						<a href="#slide4" className="btn btn-circle mr-5">❮</a>
						<a href="#slide6" className="btn btn-circle">❯</a>
					</div>
				</div>
				<div id="slide6" className="carousel-item relative w-full">
					<img src="https://i.postimg.cc/QM13rqH7/6.jpg" className="w-full h-[90vh] rounded-xl" />
					<div className="absolute flex items-center h-full left-0 right-0 bottom-0 bg-gradient-to-r from-[#151515] to-[#15151500]">
						<div className="text-white space-y-7 pl-12 w-1/3">
							<h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
							<p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
							<div>
								<button className="btn btn-secondary mr-5">Secondary</button>
								<button className="btn btn-outline btn-secondary">Secondary</button>
							</div>
						</div>
					</div>
					<div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
						<a href="#slide5" className="btn btn-circle mr-5">❮</a>
						<a href="#slide1" className="btn btn-circle">❯</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;