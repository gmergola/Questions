import { useState, useEffect } from "react";


const useApi = (apiCall, arg = null) => {
  const [Loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    let mounted = true;

    const makeCall = async () => {
      const response = await apiCall(arg);

      if (mounted) {
        setData(response.message);
        setLoading(false);
      }
    };
    makeCall();
    return () => (mounted = false);
  }, [apiCallback, param]);

  return [Loading, data];
};

export default useApi;