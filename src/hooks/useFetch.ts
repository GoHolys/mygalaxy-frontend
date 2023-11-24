import axios from "axios";
import { useEffect, useState } from "react";

export const useAxiosFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setError("Axios Error with Message: " + error.message);
        } else {
          setError(error as string);
        }

        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return [data, error, loading] as const;
};
