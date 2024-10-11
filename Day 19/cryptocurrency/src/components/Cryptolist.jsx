import React, { useState, useEffect } from 'react';
import FetchApi from './api';

const cryptoList = () => {
    const [cryptoData, setcryptoData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await FetchApi();
                setcryptoData(data);
                setLoading(false);
            }

            catch (err) {
                setError('failed to fetch')
                setLoading(false)
            }

        }
    

fetchData();

    const Interval = setInterval(fetchData, 60000);
    return () => clearInterval(Interval);
}, []);

