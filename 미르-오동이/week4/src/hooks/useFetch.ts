import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const res = await axios.get<T>(url, { signal: controller.signal });
        setData(res.data);
      } catch (err: any) {
        if (!axios.isCancel(err)) {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}
