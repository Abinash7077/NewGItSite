import React from "react";
import "./App.css";
import Main from "./Page/Main";
/* import Login from "./Page/Login"; */
import Authe from "./Page/Authe";
import Reponame from "./Page/Reponame";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  
  return (
    <div className="App App-header ">
      <BrowserRouter>
      
        <Routes>
        <Route exact path="/" element={<Authe />}></Route>
          {/* <Route exact path="/Login" element={<Login />}></Route> */}
          <Route path="/Repo" element={<Main/>}>
         
          </Route>
          <Route  path="/Repo/Reponame" element={<Reponame />}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
