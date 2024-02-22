import { useState, useEffect } from 'react';

function useFetchData(url) {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
                const response = await fetch(url);
                const jsonData = await response.json();
                setData(jsonData);
        }
        fetchData();
    }, [url]);

    return data ;
}

export default useFetchData