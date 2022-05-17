import { LIMIT_SERVER_CONNECTION_TIME } from 'constants';
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchData();
  }, [url]);

  const fetchData = async () => {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), LIMIT_SERVER_CONNECTION_TIME);

      const res = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
        },
        signal: controller.signal,
      });

      if (!res.ok) {
        throw new Error('서버 에러 발생!!');
      }

      const data = await res.json();
      setData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    data,
    isLoading,
    error,
  };
}

export default useFetch;
