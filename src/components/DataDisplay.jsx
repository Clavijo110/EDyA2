import React from 'react';
import useFetch from '../hooks/useFetch';

const DataDisplay = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const { data, isLoading, hasError } = useFetch(url);

    return (
        <div>
            <h1>Data Fetch Example</h1>

            {isLoading && <p>Loading...</p>}
            {hasError && <p>Error: {hasError}</p>}
            
            {data && (
                <ul>
                    {data.map((item) => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DataDisplay;