import React from 'react';
import logo from './../../logo.svg';
import './../../App.css';
import About from '../About/about'
import Portfolio from '../Portfolio/portfolio'
import { Link, Route } from 'react-router-dom';
import NavBar from '../../component/navBar/index'
import ScrollToTop from './../../component/ScrollToTop'
import {
  Container,
  Header,
  Button,
  Icon,
  Grid,
  Menu,
  Segment,Image,Divider,Card

} from 'semantic-ui-react'




function App() {
  return (
    <div className="App">
  <ScrollToTop className='scroll'/>
  
  <NavBar  />


       
                 <Route  exact path='/' component={About}/>
                 <Route exact path='/portfolio' component={Portfolio}/>

                 <div className='footerid' style={{minHeight:"345px"}}>
  <Grid columns={4}>
    <Grid.Row>
      <Grid.Column width={4}>
<h2 className='logo' style={{padding:'55px 0 0 0',color:"#60aafb"}}>Fanuel Alem</h2>      
</Grid.Column>
      <Grid.Column width={4}>
        <div style={{textAlign:'left',marginLeft:'100px'}}>

       <h3 className='contactmefooter'style={{padding:'70px 0 0 0',fontSize:"16px"}}>Contact Me</h3>  
       <br></br>
      <h3 className='contactmefooter' style={{fontSize:"16px",margin:'0 0 2px 0'}}>(510) 452-7283</h3> 
      <h3 className='contactmefooter' style={{fontSize:"16px",margin:'0 0 2px 0'}}>fanuelnalem@outlook.com</h3>   
      <h3 className='contactmefooter' style={{fontSize:"16px",margin:'0 0 2px 0'}}>530 52nd st. Oakland</h3>    
      <h3 className='contactmefooter' style={{fontSize:"16px",margin:'0 0 0 0'}}>94609</h3>    

      </div>

      </Grid.Column>
      <Grid.Column width={4}>
         <div style={{textAlign:'left',marginLeft:'100px'}}>


       <h3 className='contactmefooter'style={{padding:'70px 0 0 0',fontSize:"16px"}}>Menu</h3> 
      <br></br>
      <a href='https://fanuel-portfolio.herokuapp.com/' target='_blank'>
      <h3 as={Link} to='/'  className='menufooter' style={{fontSize:"16px",margin:'0 0 2px 0'}}>About</h3> 

      </a>
      <a href='https://fanuel-portfolio.herokuapp.com/portfolio'>
      <h3 className='menufooter' style={{fontSize:"16px",margin:'0 0 2px 0'}}>Portfolio</h3>   

      </a>
     
       </div>


 </Grid.Column>
      <Grid.Column width={4} style={{padding:"70px 0 0 0"}}>
        <div style={{backgroundColor:"#60aafb",borderRadius:"50%",margin:' 0 150px 0 160px',padding:"10px 0 10px 0" }}>
        <a style={{color:'white',padding:'70px 0 0 0'}}>
        <Icon size='large'name='mail'></Icon>     

        </a>
        </div>
        
       </Grid.Column>
    </Grid.Row>
    </Grid>
  </div>
  <Container fluid>

     <p text className="para"style={{backgroundColor:'#00444f',color:'white',padding:'20px',textAlign:'left'}}>
       <a style={{color:'white',fontWeight:"200"}} href='http://localhost:3000/'>
       © 2020 Copyright Fanuel Alem.

       </a>

      <span className='spann'>
<span className='git-icon'>
  <a style={{color:'white'}}href='https://github.com/fanuelalem' target="_blank"> <Icon   style={{fontSize:'1.7rem'}}name='github'></Icon>
</a>
 
</span>
<span className='linkedin-icon'>
  <a style={{color:'white'}}href='https://www.linkedin.com/in/fanuel-alem-12991b32/' target="_blank">
  <Icon style={{fontSize:'1.7rem'}} name='linkedin'></Icon>

  </a>
 
</span>
<span>
  <a style={{color:'white'}} href='mailto:fanuelnalem@outlook.com'> 
<Icon style={{fontSize:'1.7rem'}}name='mail'></Icon>
</a>
</span>
 </span>

    </p>
    
    </Container>

     </div>
  );
}

export default App;
