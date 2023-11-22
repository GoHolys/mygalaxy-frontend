import { useEffect, useState, useCallback } from "react";
import axios from "axios";

export const useAxiosFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = useCallback(async () => {
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
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return [data, error, loading] as const;
};
