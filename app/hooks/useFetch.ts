import { useEffect, useState } from "react";
import makeRequest from "../utils/api";

type Product = {
	id: string
	name: string
	created_at: string
}


const useFetch = (url:string) => {
  const [data, setData] = useState<Product[]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await makeRequest.get(url);
        setData(res.data.data);
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;