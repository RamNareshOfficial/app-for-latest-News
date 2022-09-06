import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News"
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

export class App extends Component{

    render(){

        return (
            <>
            <Navbar/>       
            <Router>
                 <Routes>
              <Route exact path="/general" element={<News key="general"  country={"in"} pageSize={5} category={"general"}/>}></Route>
              <Route exact path="/business" element={<News key="business"  country={"in"} pageSize={5} category={"business"}/>}></Route>
              <Route exact path="/entertainment" element={<News key="entertainment"  country={"in"} pageSize={5} category={"entertainment"}/>}></Route>
              <Route exact path="/health" element={<News key="health"  country={"in"} pageSize={5} category={"health"}/>}></Route>
              <Route exact path="/sports" element={<News key="sports"  country={"in"} pageSize={5} category={"sports"}/>}></Route>
              <Route exact path="/science" element={<News key="science"  country={"in"} pageSize={5} category={"science"}/>}></Route>
              <Route exact path="/technology" element={<News key="technology"  country={"in"} pageSize={5} category={"technology"}/>}></Route>
            </Routes>   
        </Router>
            </>

    )}
}



export default App