import { useEffect, useState } from "react";
function useFetchData(fetchFunction) {
	const [data, setData] = useState(null);
	const [isLoading, setLoading] = useState(false);
	const [isSuccess, setSuccess] = useState(false);
	const [error, setError] = useState(null);
	const [trigger, setTrigger] = useState(0);
	useEffect(() => {
		async function fetchData() {
			try {
				setLoading(true);
				const data = await fetchFunction();
				setData(data);
				setSuccess(true);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		}
		if (trigger > 0) {
			fetchData();
		}
	}, [isLoading, trigger, fetchFunction]);
	return { data, isLoading, isSuccess, error, setTrigger };
}
export default function useQuery(fetchFunction) {
	const { data, isLoading, isSuccess, error, setTrigger } =
		useFetchData(fetchFunction);
	return { result: data, isLoading, isSuccess, error, setTrigger };
}
