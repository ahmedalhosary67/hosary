import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Home from "../src/compoenents/Home";
import { Routes, Route } from "react-router-dom";


function App() {
  const [islogged, setIslogged] = useState(false)

  let ele = islogged ? <h1>momen log in</h1> : <h1>momen not log in </h1>;



  return (

    <div className="App">
      <div className="contaner">

     
      <Routes >
        

        <Route path="/" element={<Home/> } />

      </Routes>
      </div>

      {/* <button className="btn btn-success">btn-success</button> */}
    </div>
  );
}

export default App;
