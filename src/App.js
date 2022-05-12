import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import {Routes, Route} from "react-router-dom";
import Items from "./components/Items";


function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path={"/"} element={<Home />}/>
        <Route path={"/items"} element={<Items/>}/>
      </Routes>

    </div>
  );
}

export default App;
