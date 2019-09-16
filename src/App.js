import React from 'react';
import './App.css';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Room from './pages/Room';
import Home from './pages/Home';
import {Route,Switch} from "react-router-dom"
import Navbar from './Components/Navbar';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
       <Route exact path="/" component={Home}/>
       <Route exact path="/rooms" component={Room}/>
       <Route exact path="/singleRoom/:slug" component={SingleRoom}/>
       <Route   component={Error}/>
      </Switch>
   
   </React.Fragment>
  );
}

export default App;
