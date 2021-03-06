import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Houses from './Components/Houses/Houses'
import Characters from './Components/Characters/Characters'
import Character from './Components/Characters/Character'
import Cronology from './Components/Cronology/Cronology'
import Home from './Components/Home/home'
import Nav from './Components/Nav/Nav'
import './styles.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header/Header';
import House from './Components/Houses/House';


function App() {

 

  return (
    <Router>
      <div>
        <Header />
        <Switch>          
          <Route path="/" exact component={Home}/>
          <Route path="/characters" exact component={Characters}/>
          <Route path="/houses" exact component={Houses}/>
          <Route path="/cronology" component={Cronology}/>
          <Route path="/characters/:name" component = {Character} />
          <Route path="/houses/:name" component = {House} />
        </Switch>
        <Nav/>
        
      </div>
    </Router>
  );
}

export default App;
