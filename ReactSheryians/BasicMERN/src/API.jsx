import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API = () => {
    const [data, setData] = useState([]);

    // Fetch data from the API
    const getData = async () => {
        try {
            const response = await axios.get('https://picsum.photos/v2/list'); // Example API URL
            const data_Res = response.data;
            setData(data_Res);
            console.log(data_Res);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Log data when it changes
    useEffect(() => {
      console.log(data);
    }, [data]);

    return (
        <div className='p-10'>
            <button
                onClick={getData}
                className='text-white font-semibold text-2xl bg-pink-600 px-6 py-3 rounded active:scale-90'
            >
                Get Data
            </button>
            <div className='p-5 bg-gray-600 mt-5 rounded'>
                {data.length > 0 ? (
                    <div className='flex flex-wrap'>
                        {data.map((item) => (
                                 <img src={item.url} className=' rounded m-4' key={item.id} alt="img" />
                                // <h1 key={item.id}>{item.author}</h1>
                        ))}
                    </div>
                ) : (
                    'No data available'
                )}
            </div>
        </div>
    );
};

export default API;