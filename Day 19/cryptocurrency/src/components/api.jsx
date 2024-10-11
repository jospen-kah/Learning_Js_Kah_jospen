
const FetchApi = async () => {
    try {

        const response = await fetch("https://www.coinapi.io/get-free-api-key?product_id=market-data-api", {
            method: "GET",
            headers: {
                API_KEY: 'B6A2BFDC-5045-43A8-9D92-B57443089756',
            }
        }
     )
   
       
        
     if (!response.ok) {
        throw new Error('Failed to Fetch');
    }

   
    const data = await response.json()
    return data;
}

    catch (error) {
    console.error('Cannot find the error ', error);
    throw error
}

}
export default FetchApi;