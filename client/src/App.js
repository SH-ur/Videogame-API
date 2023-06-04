import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Views/Home";
import Landing from "./Views/Landing";
import Details from "./Views/Details";
import Form from "./Views/Form.jsx";
import Navbar from "./Components/Navbar";
//import { useState } from 'react';
import { useLocation } from "react-router-dom";
import './Css/newApp.css'
function App() {
  let location = useLocation();
  //A partir de aquí haré una prueba de algo que tengo en los apuntes para la searchbar

  console.log(location.pathname);
  return (
    <div className="App">
      <h1 className="HenryTitle">Henry Videogames</h1>
      {location.pathname !== "/" ? <Navbar /> : <Landing />}
      <Switch>
        <Route  path="/home" >
         
          <Home/>
        </Route>
        
        <Route  path="/details/:id" >
          
          <Details/>
        </Route>
        <Route path="/create" >
          {" "}
         
          <Form/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
