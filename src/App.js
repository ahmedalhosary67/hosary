import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Home from "../src/compoenents/Home";
import { Routes, Route } from "react-router-dom";



function App() {
  const [islogged, setIslogged] = useState(false)




  return (

    <div className="App">
      <div className="contaner">
      <Routes >
        <Route path="/" element={<Home/> } />
      </Routes>
      </div>
          </div>
  );
}

export default App;
