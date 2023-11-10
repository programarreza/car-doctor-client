import { useEffect, useState } from "react";
import { axiosSecure } from "./useAxiosSecure";


const useServices = (asc, search) => {
	const [services, setServices] = useState([])

	useEffect(() => {
		axiosSecure(`/services?search=${search}`)
		.then(res => setServices(res?.data))
	}, [asc, search])
	return services;
};

export default useServices;