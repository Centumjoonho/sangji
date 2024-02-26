import { useEffect, useState } from 'react';

function useDataFetcher(endpoint) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [shouldRefetch, setShouldRefetch] = useState({}); 

    const refetch = (callback) => {
        setShouldRefetch({});
        if (callback) {
            callback();
        }
    };

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(endpoint);
                if (!response.ok) {
                    throw new Error('Server responded with an error');
                }
                const result = await response.json();
                setData(result);
                setIsLoading(false);
            } catch (err) {
                setError(err);
                setIsLoading(false);
            }
        }

        fetchData();
    }, [endpoint, shouldRefetch]);

    return { data, isLoading, error, refetch };
}

export default useDataFetcher;