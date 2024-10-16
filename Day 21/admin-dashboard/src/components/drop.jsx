import { useState } from "react";


const Drop = ({name, children}) =>  {
    const [isopen, setIsopen] = useState(false);

        const handle = () =>{
            setIsopen(!isopen);

        };
return (
    <div>
        <button onClick={handle}>
            {name}
        </button>

        {isopen && (
            <div>
                {children}
            </div>
        )}
    </div>
);
  };  

    export default Drop;