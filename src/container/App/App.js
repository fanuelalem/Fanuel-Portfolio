import React from 'react';
import logo from './../../logo.svg';
import './../../App.css';
import About from '../About/about'
import Portfolio from '../Portfolio/portfolio'
import { Route } from 'react-router-dom';
import NavBar from '../../component/navBar/index'




function App() {
  return (
    <div className="App">
  <NavBar/>


       
                 <Route exact path='/' component={About}/>
                 <Route exact path='/portfolio' component={Portfolio}/>



     </div>
  );
}

export default App;
