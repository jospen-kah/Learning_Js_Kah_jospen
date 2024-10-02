import {useState} from 'react'

function App() {
  
      const [count, setCount] = useState(0);

      function handler(){
        setCount (count+1);
      }
        return (
        <button onClick={handler}>
       count{count}
        </button>
    
  );

}

export default App;
