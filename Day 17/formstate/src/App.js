import {useState} from 'react'

function App() {
  const [form, setForm] = useState({
    first_name:"jospen",
    last_name: "Ngum",
    email: "jos@gmail"
  })
  return (
    <div className="App">
     <label>
      FirstName:
      <input value={form.first_name} 
      onChange={e =>{
        setForm({
          ...form,
          first_name: e.target.value
      })
      }}
      ></input>
     </label>

     <label>
      LastName:
      <input
      value = {form.last_name}
      onChange={e => {
        setForm({
          ...form,
          last_name: e.target.value
        })
      }}
      ></input>
     </label>
     <label>
      Email:
      <input 
      value={form.email}
      onChange={e => {
        setForm({
          ...form,
          email: e.target.value
        })
      }}
      ></input>
     </label>
     <p>
      {form.first_name}{' '}
      {form.last_name}{' '}
      ({form.email})
     </p>
    </div>
  );
}

export default App;
