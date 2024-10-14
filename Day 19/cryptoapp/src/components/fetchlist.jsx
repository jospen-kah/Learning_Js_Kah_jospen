// import React from 'react';
// import PropTypes from 'prop-types';
import FetchApi from './api';

const FetchedData = ({dataset, setKeywords})=>{
        
    return(
        <div>
            {dataset.map( (d) =>{
                return <FetchApi  dataset = {d} setKeywords ={setKeywords} />
            })
}
        </div>
    )
}




export default FetchedData