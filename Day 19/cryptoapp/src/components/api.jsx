import { useState, useEffect } from 'react';

const CryptoList = () => {
    const [cryptoData, setCryptoData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const FetchApi = async () => {
            try {
                const response = await fetch("https://rest.coinapi.io/v1/exchangerate/BTC/USD", {
                    method: "GET",
                    headers: {
                        'X-CoinAPI-Key': 'B6A2BFDC-5045-43A8-9D92-B57443089756',
                    }
                });
                if (!response.ok) {
                    throw new Error(`Error fetching , ${response.status}`);
                }

                const data = await response.json();
                setCryptoData([data])
                setLoading(false)
                console.log(data)


            }
            catch(error)
            {
                setError('Failed to fetch',error)
                setLoading(false)
            }
            }
            FetchApi();
            const interval = setInterval(FetchApi, 600);
            return () => clearInterval(interval);
    }, [])
    if (loading) return <p>Loading</p>;
    if (error) return <p>{error}</p>

    return(
        <div className="crypto-list">
        <table>
            <thead>
                <tr>
                    <th>Coin</th>
                    <th>Price (USD)</th>

                </tr>
            </thead>
            <tbody>
                {cryptoData.map((coin, index) => (
                    <tr key={index}>
                        <td>{coin.asset_id_base}</td>
                        <td>${coin.rate}</td>
                        
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    )
}
export default CryptoList;
