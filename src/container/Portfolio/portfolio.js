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
import profilegenerator from './../../component/Images/profiler-generator.png'
import happytravel from './../../component/Images/happytrav.png'
import pwgenerator from './../../component/Images/password-generator.png'
 import weather from './../../component/Images/weather.png'
 import jedipic from './../../component/Images/jedipic.png'
 import dayplanner from './../../component/Images/day-planner.png'
 import employeetracker from './../../component/Images/employee-tracker.png'
 import stock from './../../component/Images/stock.png'
 import employeedirectory from './../../component/Images/employee-directory.png'
 import teamprofile from './../../component/Images/team-profile.png'
 import notetaker from './../../component/Images/noteTaker.png'
 import fitnesstracker from './../../component/Images/fitnessTracker2.png'
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
  {/* <div className='pic'>
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

 </div> */}
    
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

  


 {/* <div className='pic'>
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

 </div> */}

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
 <Image className='image__img'  src={employeetracker}   />
 <div className='image__overlay image__overlay--blur'>

 <div style={{padding:'20px'}}>


 
    <h2>   Employee Management System

</h2>
   <br></br>
 <p>   
 A command-line application for adding, viewing, updating, and deleting employee information.

Made using: Node.js, Inquirer, mySQL, mySQL Workbench, and ESLint.
 </p>
 <p>Made using: Node.js, Inquirer, mySQL, mySQL Workbench, and ESLint.



</p> 
<br></br>
 
<a href='https://github.com/fanuelalem/employee-tracker' target='_blank'>
<i style={{color:'white'}}className="fab fa-github github"></i>

</a>
  </div>

 
 </div>

 </div>

 

  

 {/* <div className='pic'>
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

 </div> */}

  
<div className='pic'>
 <Image className='image__img'  src={profilegenerator}   />
 <div className='image__overlay image__overlay--blur'>

 <div style={{padding:'20px'}}>


 
    <h2>  Github Profile-Generator
</h2>
   <br></br>
 <p>   A command-line application that will generate a profile in html based off user input.

 </p>
 <p>Made using: Node.js, Axios, Dotenv, and Inquirer.


</p> 
<br></br>
 
<a href='https://github.com/fanuelalem/profile_generator' target='_blank'>
<i style={{color:'white'}}className="fab fa-github github"></i>

</a>
  </div>

 
 </div>

 </div>
  
 {/* <div className='pic'>
 <Image className='image__img'  src={teamprofile}   />
 <div className='image__overlay image__overlay--blur'>

 <div style={{padding:'20px'}}>


 
    <h2>  Team-Profile Generator
</h2>
   <br></br>
 <p>    A command-line application that will create an HTML file with employee information gathered from a series of prompts.

 
 </p>
 <p>
   
 Made using: Node.js, Inquirer, and Jest.



</p> 
<br></br>
 
<a href='https://github.com/fanuelalem/team-profile-generator' target='_blank'>
<i style={{color:'white'}}className="fab fa-github github"></i>

</a>
  </div>

 
 </div>

 </div> */}

 {/* <div className='pic'>
 <Image className='image__img'  src={notetaker}   />
 <div className='image__overlay image__overlay--blur'>

 <div style={{padding:'20px'}}>


 
    <h2>  Notetaker
</h2>
   <br></br>
 <p>   
 A web application that allows a user to take notes using Express.

  
 </p>
 <p>
   
 Made using: HTML, CSS, JavaScript, jQuery, Bootstrap, Node.js, Express, UUID, and Heroku.



</p> 
<br></br>
 
<a href='https://fanuelnotetaker.herokuapp.com/' target='_blank'>
<i style={{color:'white'}}className="fas fa-link link"></i>

</a>
<a href='https://github.com/fanuelalem/Note_Taker' target='_blank'>
<i style={{color:'white'}}className="fab fa-github github"></i>

</a>
  </div>

 
 </div>

 </div> */}

 
 <div className='pic'>
 <Image className='image__img'  src={fitnesstracker}   />
 <div className='image__overlay image__overlay--blur'>

 <div style={{padding:'20px'}}>


 
    <h2>    Fitness Tracker

 
 </h2>
   <br></br>
 <p>   A web application that allows a user to plan their workday.
 A web application that allows a user to create and track their workouts.

 </p>
 <p>Made using: Express, MongoDB, Mongoose, Morgan, and Heroku.



</p> 
<br></br>
<a href='https://fanuelfitnesstracker.herokuapp.com/' target='_blank'>
<i style={{color:'white'}}className="fas fa-link link"></i>

</a>
<a href='https://github.com/fanuelalem/fitness-tracker' target='_blank'>
<i style={{color:'white'}}className="fab fa-github github"></i>

</a>
  </div>

 
 </div>

 </div>
 <div className='pic'>
 <Image className='image__img'  src={employeedirectory}   />
 <div className='image__overlay image__overlay--blur'>

 <div style={{padding:'20px'}}>


 
    <h2>    Employee Directory

 
 </h2>
   <br></br>
 <p>   
 A web application that lists employee information.

 </p>
 <p>Made using: React, Random User Generator API, and Heroku.



</p> 
<br></br>
<a href='https://fanueled.herokuapp.com/' target='_blank'>
<i style={{color:'white'}}className="fas fa-link link"></i>

</a>
<a href='https://github.com/fanuelalem/employee-directory' target='_blank'>
<i style={{color:'white'}}className="fab fa-github github"></i>

</a>
  </div>

 
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
 <Image className='image__img'  src={stock}   />
 <div className='image__overlay image__overlay--blur'>

 <div style={{padding:'20px'}}>
   <h2> Stock Tracker</h2>
   <br></br>
 <p> This application is a helpful tool that helps you save stocks onto a personal wathclist. It provides information on the stock markets top 10 winners and losers of the day. 
Users can also search and track any stock in the market and view stocks that are trending among other users.</p>
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
 
              </div>

 
        )
    }
}
