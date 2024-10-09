import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Service from "./components/Services";
import About from "./components/About";
import Projects from "./components/Project"
import Contact from "./components/Contact"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
      <div className="App">
        <Navbar />
      
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/services" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/Project" element= {<Projects />} /> 
          <Route path="/Contact" element={<Contact />} /> 
        </Routes>
      </div>
  );
}

export default App;
