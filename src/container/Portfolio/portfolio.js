import React, { Component } from 'react'
import './../../index.css'
import picture from './../../component/Images/crop.jpg'
import {
    Container,
    Header,
    Card,
    Button,
    Icon,
    Grid,
    Menu,
    Segment,Image,Divider,

} from 'semantic-ui-react'
import quiz from './../../component/Images/quiz-app.png'

import happytravel from './../../component/Images/happytrav.png'
import pwgenerator from './../../component/Images/password-generator.png'
 import weather from './../../component/Images/weather.png'
 import jedipic from './../../component/Images/jedipic.png'
 import dayplanner from './../../component/Images/day-planner.png'
 import stock from './../../component/Images/stock.png'
 import readmegenerator from './../../component/Images/readmegenerator.png'
 

export default class Portfolio extends Component {
    render() {
        return (
            <div>

             <div className='starting-out'>
                <Container>

                    <Header style={{fontSize:'6em'}}>
                        
                        <p > Portfolio</p> </Header>

                        <Header  
inverted
        style={{
        fontSize: '1.8em',
        // fontWeight: 'normal',
        
        }}
    >
  
      <p className='name'>                      A collection of work I've done.
</p>
        
      </Header>
                        
                       
                     

                    </Container>


            </div>
            
            
            <div style={{textAlign:'left',marginBottom:'25px'}}>

            Photo by <a href='https://www.pexels.com/@belart84'>Artem Beliaikin</a> from <a href="https://www.pexels.com/">Pexels</a> </div>

 
<br></br>
<br></br>
<br></br>


 <Container className='pdot' text>

<Header style={{fontSize:'4em'}}>
    <p className='dc'  > Starting Out.</p>
</Header>
 <p style={{fontSize:'1.2em'}}>We've all got to start somewhere.</p>
<p style={{fontSize:'1.2em'}}>A collection of projects I did as a student.</p>
 </Container>
 
            
             
   
<Segment style={{padding:'2em 0em 6em'}} vertical>
 

<div className='card-containers' >

    
  <div className='image-container'>
  <div className='pic'>
 <Image className='image__img'  src={pwgenerator}   />
 <div className='image__overlay image__overlay--blur'>

<div style={{padding:'20px'}}>
   <h2> Password Generator</h2>
   <br></br>
 <p> A web application that uses prompts to generate a random password.</p>
 <p>Made using: Made using: HTML, CSS, JavaScript, and GitHub Pages.
</p> 
<br></br>
<a href='https://fanuelalem.github.io/password-generator/' target='_blank'>
<i style={{color:'white'}}className="fas fa-link link"></i>

</a>
<a href='https://github.com/fanuelalem/password-generator' target='_blank'>
<i style={{color:'white'}}className="fab fa-github github"></i>

</a>
  </div>

 </div>

 </div>
    
 <div className='pic'>
 <Image className='image__img'  src={quiz}   />
 <div className='image__overlay image__overlay--blur'>

 <div style={{padding:'20px'}}>


 
    <h2>  quiz-app
</h2>
   <br></br>
 <p>  A web application that tests a user's JavaScript knowledge.


</p>
 <p>Made using: HTML, JavaScript, Bootstrap, and GitHub Pages.

</p> 
<br></br>
<a href='https://fanuelalem.github.io/hw4/index.html' target='_blank'>
<i style={{color:'white'}}className="fas fa-link link"></i>

</a>
<a href='https://github.com/fanuelalem/hw4' target='_blank'>
<i style={{color:'white'}}className="fab fa-github github"></i>

</a>
  </div>

 
 </div>

 </div>
 <div className='pic'>
 <Image className='image__img'  src={dayplanner}   />
 <div className='image__overlay image__overlay--blur'>

 <div style={{padding:'20px'}}>


 
    <h2>   Work Day Scheduler
 
 </h2>
   <br></br>
 <p>   A web application that allows a user to plan their workday.

</p>
 <p>Made using: HTML, JavaScript, jQuery, Bootstrap, and Moment.js.


</p> 
<br></br>
<a href='https://fanuelalem.github.io/hw_5/' target='_blank'>
<i style={{color:'white'}}className="fas fa-link link"></i>

</a>
<a href='https://github.com/fanuelalem/hw_5' target='_blank'>
<i style={{color:'white'}}className="fab fa-github github"></i>

</a>
  </div>

 
 </div>

 </div>
 <div className='pic'>
 <Image className='image__img'  src={weather}   />
 <div className='image__overlay image__overlay--blur'>

 <div style={{padding:'20px'}}>


 
    <h2>  Weather Dashboard
</h2>
   <br></br>
 <p>  A web application that provides the current weather and a 5-day forecast for a city.
</p>
 <p>Made using: HTML, CSS, JavaScript, jQuery, Bootstrap, OpenWeather API, Moment.js, and GitHub Pages.

</p> 
<br></br>
<a href='https://fanuelalem.github.io/weather-app/' target='_blank'>
<i style={{color:'white'}}className="fas fa-link link"></i>

</a>
<a href='https://github.com/fanuelalem/weather-app' target='_blank'>
<i style={{color:'white'}}className="fab fa-github github"></i>

</a>
  </div>

 
 </div>

 </div>

 <div className='pic'>
 <Image className='image__img'  src={readmegenerator}   />
 <div className='image__overlay image__overlay--blur'>

 <div style={{padding:'20px'}}>


 
    <h2>  Good ReadMe Generator
</h2>
   <br></br>
 <p>   A command-line application that will create a 'readme' file based off user input.

 </p>
 <p>Made using: Node.js, Axios, Dotenv, and Inquirer.


</p> 
<br></br>
 
<a href='https://github.com/fanuelalem/readme-generator' target='_blank'>
<i style={{color:'white'}}className="fab fa-github github"></i>

</a>
  </div>

 
 </div>

 </div>

  
 <div className='pic'>
 <Image className='image__img'  src={jedipic}   />
 <div className='image__overlay image__overlay--blur'>

<div className='image__title'> title</div>
<p className='image__description'> this is the description</p>
 </div>

 </div>
 <div className='pic'>
 <Image className='image__img'  src={jedipic}   />
 <div className='image__overlay image__overlay--blur'>

<div className='image__title'> title</div>
<p className='image__description'> this is the description</p>
 </div>

 </div>
 <div className='pic'>
 <Image className='image__img'  src={jedipic}   />
 <div className='image__overlay image__overlay--blur'>

<div className='image__title'> title</div>
<p className='image__description'> this is the description</p>
 </div>

 </div>
 <div className='pic'>
 <Image className='image__img'  src={jedipic}   />
 <div className='image__overlay image__overlay--blur'>

<div className='image__title'> title</div>
<p className='image__description'> this is the description</p>
 </div>

 </div>

 <div className='pic'>
 <Image className='image__img'  src={jedipic}   />
 <div className='image__overlay image__overlay--blur'>

<div className='image__title'> title</div>
<p className='image__description'> this is the description</p>
 </div>

 </div>

 <div className='pic'>
 <Image className='image__img'  src={stock}   />
 <div className='image__overlay image__overlay--blur'>

<div className='image__title'> title</div>
<p className='image__description'> this is the description</p>
 </div>

 </div>

   

   </div>
  </div>
 
 
 
</Segment>

<br></br>
<br></br>
<br></br>



 <Container className='pdot' text>

<Header style={{fontSize:'4em'}}>
    <p className='dc'  >  Teamwork</p>
</Header>
 <p style={{ fontSize: '1.2em',margin:'0' }}>A collection of projects that I collaborated on.





</p> 
 </Container>

 
 
 

 <Segment style={{padding:'2em 0em 6em'}} vertical>

<div className='card-containers' >


    
  <div className='image-container'>
 <div className='pic'>
 <Image className='image__img'  src={jedipic}   />
 <div className='image__overlay image__overlay--blur'>

 <div style={{padding:'20px'}}>
   <h2> The Jedi Code</h2>
   <br></br>
 <p> A full stack application that grades a user's response in an interactive trivia game to decide whether they are a jedi or a sith.</p>
 <p>Made using: HTML, CSS, JavaScript, React, NodeJs, SQL, and Heroku.
</p> 
<br></br>
<a href='https://thejedicode.herokuapp.com/#/' target='_blank'>
<i style={{color:'white'}}className="fas fa-link link"></i>

</a>
<a href='https://github.com/fanuelalem/Project-02' target='_blank'>
<i style={{color:'white'}} className="fab fa-github github"></i>

</a>
  </div>

 </div>

 </div>
    
 <div className='pic'>
 <Image className='image__img'  src={happytravel}   />
 <div className='image__overlay image__overlay--blur'>

 <div style={{padding:'20px'}}>
   <h2> Happy Travels</h2>
   <br></br>
 <p> This application gives users relevant information on local restaurants, events, and weather based on location and date.</p>
 <p>Made using: HTML, CSS, JavaScript,jQuery, Bootstrap, and GitHub Pages.
</p> 
<br></br>
<a href='https://fanuelalem.github.io/happytravel/' target='_blank'>
<i style={{color:'white'}}className="fas fa-link link"></i>

</a>

<a href='https://github.com/fanuelalem/happytravel' target='_blank'>
<i style={{color:'white'}}className="fab fa-github github"></i>

</a>
  </div>

 </div>

 </div>

 <div className='pic'>
 <Image className='image__img'  src={stock}   />
 <div className='image__overlay image__overlay--blur'>

 <div style={{padding:'20px'}}>
   <h2> Stock Tracker</h2>
   <br></br>
 <p> This application will provide information on the stock markets top 10 winners and gainers of the day. It gives users an informative insight and allows them to manage them on a watchlist. Users can also share and connect with other users.</p>
 <p>Made using: HTML, CSS, JavaScript, Semantics UI, React, NodeJs, Mongo, PassportJS and Heroku.
</p> 
<br></br>
<a href='https://thawing-bastion-89215.herokuapp.com/#/' target='_blank' > 
<i style={{color:'white'}}className="fas fa-link link"></i>

</a>
<a href='https://github.com/fanuelalem/Project-3' target='_blank'>
<i style={{color:'white'}}className="fab fa-github github"></i>

</a>
  </div>

 </div>

 </div>

  {/* <Image style={{margin:'.5rem'}}src={happytravel} size='large' /> */}
  {/* <Image style={{margin:'.5rem'}}src={stock} size='large' /> */}

   </div>
  </div>
  
   
</Segment>
 
<Segment style={{ padding: '6em 0em' }}vertical>
<Container  text>

 
<Header  as='h3' style={{ fontSize: '4em' }}>

   <span id='sayhello'> Say hello</span> 
        </Header>
<br></br>
        <p style={{ fontSize: '1.2em' }}>Reach out and say hi or connect with me. I look forward to hearing from you.



</p>
<br></br>

<a href='mailto:fanuelnalem@outlook.com'>
<Button color="linkedin"size='large'> <Icon name='mail'> </Icon> email me</Button>

</a>
 <br></br>

<br></br>


<div>    
  

 <br></br>
 
 <a href='https://www.linkedin.com/in/fanuel-alem-12991b32/' target="_blank"> <Icon color='black'style={{fontSize:'2.8rem'}}name='linkedin'></Icon></a>  
 <a href='https://github.com/fanuelalem' target="_blank"><Icon color='black' style={{fontSize:'2.8rem'}}name='github'></Icon> </a>   
</div>
 
       </Container>
 
</Segment>
<Container fluid>

     <p text className="para"style={{backgroundColor:'#1b1c1d',color:'white',padding:'20px'}}>
       <a style={{color:'white'}} href='http://localhost:3000/'>
       <span id='sayhello'> © 2020 Copyright Fanuel Alem.</span> 

       </a>
      <span className='spann'>
<span className='git-icon'>
  <a style={{color:'white'}}href='https://github.com/fanuelalem'> <Icon style={{fontSize:'1.7rem'}}name='github'></Icon>
</a>
 
</span>
<span className='linkedin-icon'>
  <a style={{color:'white'}}href='https://www.linkedin.com/in/fanuel-alem-12991b32/'>
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

 
        )
    }
}
