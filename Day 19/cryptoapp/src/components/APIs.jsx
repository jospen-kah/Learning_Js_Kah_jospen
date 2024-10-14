// import {useState, useEffect} from 'react';
const FetchedData =async () =>{
    // const [first, setfirst] = useState([])

    // useEffect(() => {
     
   
   
    



// const FetchApi = async ()=>{
    try{
        const response = await fetch('',{
            method : "GET",
            headers : {
                'X-CoinAPI-Key': 'B6A2BFDC-5045-43A8-9D92-B57443089756',
            }   
         })
         if(!response.ok){
            throw new Error('Error', response.status)
         }

         const result =await response.json();
         console.log(result)
        //  setfirst(result)
         return result;
    }

    catch(error){
        console.error('fetch error', error)
    }

    
}

FetchedData()
// }, []);


// return(
//     <div>
//     {
//     first.map( (item) => (
//       <div key={item.id}>
//       </div>
//     ))}
//   </div>
// )

// }

export default FetchedData;