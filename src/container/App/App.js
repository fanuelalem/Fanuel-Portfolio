import React from 'react';
import logo from './../../logo.svg';
import './../../App.css';
import About from '../About/about'
import Portfolio from '../Portfolio/portfolio'
import { Route } from 'react-router-dom';
import NavBar from '../../component/navBar/index'
import ScrollToTop from './../../component/ScrollToTop'




function App() {
  return (
    <div className="App">
  <ScrollToTop className='scroll'/>
  <NavBar  />


       
                 <Route  exact path='/' component={About}/>
                 <Route exact path='/portfolio' component={Portfolio}/>



     </div>
  );
}

export default App;
