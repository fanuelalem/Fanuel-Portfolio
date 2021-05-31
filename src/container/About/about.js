import React, { Component } from 'react'
import './../../index.css'
 import {
    Container,
    Header,
    Button,
    Icon,
    Grid,
    Menu,
    Segment,Image,Divider,Card, Item

} from 'semantic-ui-react'

 import pic from './../../component/Images/jbpic.png'
 import Aos from 'aos'
 import AosScroll from './../Aos'
 import 'aos/dist/aos.css'
 import happytravel from './../../component/Images/happytrav.png'
 import jedipic from './../../component/Images/jedipic.png'
 import stock from './../../component/Images/stockcanva.png'
 import AdminApp from './../../component/Images/adminApp.png'
 
 import weather from './../../component/Images/weatherpic.png'
 import quiz from './../../component/Images/quiz-app.png'
 import Resume from './../../component/Images/FAResume2.pdf'
 import buil from './../../component/Images/buil.jpg'
 import spic from './../../component/Images/jj.png'

import { right } from '@popperjs/core'
import App from '../App/App'
  
 
export default class About extends Component {
   
 
    render() {

         return (
            <div>
 



   <div className="background" >

<div className="info">

<Container fluid>

<Grid divided='vertically'>
    <Grid.Row columns={2}>
      <Grid.Column width={3}>


      </Grid.Column>
      <Grid.Column width={13}>

      <h1 className='name'style={{fontSize:"65px",lineHeight:"1.2",padding:"105px 0 0 0",fontWeight:'800',textAlign:'left',margin:'0 0 12px 0'}} > 
      FANUEL N. ALEM
            
       </h1>

       <p className='pname' style={{padding:'0 0 0 0',margin:"0 0 0 0",color:"#473f4f",padding:'0 0 11px 0px'}} >  
FULL-STACK SOFTWARE ENGINEER        
<br></br></p>
<div className='style'style={{textAlign:"left"}}> <a href='mailto:fanuelnalem@outlook.com'>
<button className='sendmeamessage'><span style={{fontSize:'18px',color:'white',fontWeight:"bold"}}>Connect With Me   
</span>  </button>

  </a>
    </div>

        </Grid.Column>
    </Grid.Row>
    </Grid>
 
  



 
</Container>




    </div>

       </div>


        
        

{/* 
    <div style={{textAlign:'left',marginBottom:'25px'}}>
    Photo by <a href='https://www.pexels.com/@scottwebb'>Scott Web</a> from <a href="https://www.pexels.com/">Pexels</a> </div> */}

{/* <Container fluid>
         <Grid divided='vertically'>
    <Grid.Row columns={2}>
      <Grid.Column style={{padding:"0 0 0 0"}}>


<h2>hello</h2>        
 
      
        
      </Grid.Column>
      <Grid.Column style={{padding:"0 0 0 0"}}>
<div className='css' style={{minHeight:"900px"}}> </div>      
</Grid.Column>
    </Grid.Row>
    </Grid>        
     </Container> */}
  
  <div style={{backgroundColor:"white",padding: '59px 0 100px 0'}}  >
  <Container className='bioo'>

  <Grid>
    <Grid.Column width={7} style={{padding:'95px 0 0 0'}}>
      
    <Image src={pic} size='medium' circular verticalAlign='top' style={{margin:"0 0 0 0",padding:'0px 0 0 0'}} />     
    </Grid.Column>
    <Grid.Column width={9} >
<h2 style={{textAlign:"left",padding:'25px 0 0 0'}} className='txt'>
  ABOUT
  </h2>    
  

  <p style={{textAlign:'left',fontSize:"16px",fontWeight:"200"}} className='txt-2'>Hello, I am a Full stack web developer 
  leveraging a background in client management and I.T support to help build intuitive, engaging, and pleasant 
  user experiences on the web. I transitioned into web development and was previously an account manager offering 
  support for clients and helping non-profits, charities, and churches gain access to technology tools. I managed 
  100-200 clients per day, and I quickly learned that many of their websites lacked an intuitive design. I eventually 
  acknowledged that the demand for web developers is growing and I wanted to utilize my technical capabilities to help 
  companies build their online presence. While business was my primary focus in college, I was heavily engaged in computer 
  science courses and involved in extracurricular activity doing web projects and working as a freelance Wordpress developer. 
  I'm interested in web development because I enjoy the problem solving process and am dedicated to creating adequate solutions.</p>

              <p style={{textAlign:'left',fontSize:"16px",fontWeight:"200",margin:'0 0 50px 0'}} className='txt-2'>
              Most Recently earned a certificate in full stack web development 
           from the University of California, Berkeley, with newly developed 
           front end and back end skills including JavaScript, CSS, Bootstrap, 
           Semantics-UI, ReactJS, responsive web design, NodeJS, API interface, 
           SQL, and mongoose. Known as an innovative critical thinker that enjoys 
           solving problems and passionate about developing full stack applications. 
           With each project, my aim is to introduce efficient solutions to users and 
           engage my audience for an impactful user experience. I’m excited to leverage 
           my skills as part of a fast-paced, quality-driven team to build better experiences 
           on the web.
              </p>

              <a href={Resume} target="_blank" >
            <Button color="gray"size='large'>View my resume.</Button>

            </a>
  </Grid.Column>
    
  </Grid>


  
 </Container>
 </div>   

{/* 
         <Segment style={{padding:'em 0em',backgroundColor:"#96acd0"}}  vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
          <Image className='image-bio' src={pic} style={{borderRadius:"50%",width:"400px",hieght:"400px"}} />

          </Grid.Column>
          <Grid.Column floated='right' width={8}>

          <Header as='h3' style={{ fontSize: '2.5em' }}>
         <span id='about-me' style={{color:"white"}}> About me </span>             
          </Header>
          <br>
          </br>
            <p style={{ fontSize: '1.2em',textAlign:'left',color:"white" }}>

            Hi, I am a Full stack web developer leveraging a background in client management and 
            product engineering in the tech industry to help build intuitive, engaging, and pleasant
             user experiences on the web. I recently transitioned into web development and was previously 
             an account manager at a tech company helping non-profits, charities, and churches gain access to 
             technology tools like google products. In my role, I managed 100-200 different clients per day who 
             showed me their websites for verification purposes. The frequent exposure to different kinds of websites
              per day triggered my curiosity for web development. While business was my primary focus in college, I was 
             heavily engaged in computer science courses as well. My first experience with web development was when I 
              was a student at San Francisco State University taking computer science courses and building a simple blog 
              website on a small team. I have become a part time web developer building new features for a startup and 
              currently helping them scale.

 

  

            </p>
           <br></br>

           <p style={{ fontSize: '1.2em' ,color:"white"}}>
           Most Recently earned a certificate in full stack web development 
           from the University of California, Berkeley, with newly developed 
           front end and back end skills including JavaScript, CSS, Bootstrap, 
           Semantics-UI, ReactJS, responsive web design, NodeJS, API interface, 
           SQL, and mongoose. Known as an innovative critical thinker that enjoys 
           solving problems and passionate about developing full stack applications. 
           With each project, my aim is to introduce efficient solutions to users and 
           engage my audience for an impactful user experience. I’m excited to leverage 
           my skills as part of a fast-paced, quality-driven team to build better experiences 
           on the web.

             

            </p>           

           </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <br></br>
            <a href={Resume} target="_blank">
            <Button color="linkedin"size='large'>View my resume.</Button>

            </a>
           </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    

  */}
  
<div className='tech'>

   <Segment  style={{ padding: '10em 0em'}} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '3.5em',color:"white",fontFamily:"'Maven Pro', sans-serif",fontWeight:"700",letterSpacing:'5px' }}>
TECHNOLOGY
        </Header>
<br></br>
        <Grid divided='vertically'>
    <Grid.Row columns={6}>
      <Grid.Column>
      <div className="About-icon-div"><i style={{fontSize:'5.5rem',color:"white"}}className="About-icon fab fa-html5"></i><p className='descrip' style={{color:"white"}}>HTML5</p></div>
      </Grid.Column>
      <Grid.Column>
      <div className="About-icon-div"><i style={{fontSize:'5.5rem',color:"white"}}className="About-icon fab fa-css3-alt"></i><p className='descrip' style={{color:"white"}}>CSS3</p></div>
      </Grid.Column>
      <Grid.Column>
      <div className="About-icon-div"><i style={{fontSize:'5.5rem',color:'white'}}className="About-icon fab fa-js"></i><p className='descrip' style={{color:"white"}}>JavaScript</p></div>

      </Grid.Column>
      <Grid.Column>
      <div className="About-icon-div"><i style={{fontSize:'5.5rem',color:"white"}}className="About-icon fab fa-bootstrap"></i><p className='descrip' style={{color:"white"}}>Bootstrap</p></div>

      </Grid.Column>
      <Grid.Column>
       <div className="About-icon-div"><i style={{fontSize:'5.5rem',color:'white'}}className="About-icon fab fa-react"></i><p className='descrip' style={{color:'white'}}>React</p></div>

      </Grid.Column>

<Grid.Column>
<div className="About-icon-div"><i style={{fontSize:'5.5rem',color:'white'}}className="About-icon fab fa-node"></i><p className='descrip' style={{color:'white'}}>Node.js</p></div>

  </Grid.Column>
   

    </Grid.Row>

   
  </Grid>
 
  
        
      </Container>
    </Segment>

    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Container  text>

 
<Header as='h3' style={{  fontSize: '3.5em',color:"black",fontFamily:"'Maven Pro', sans-serif",fontWeight:"700"}}>
MY WORK
        </Header>
<br></br>
        {/* <p style={{ fontSize: '1.2em' }} className='descrip'>Here's a selection of work I've done.

</p> */}
        
      </Container>
       <AosScroll/>
<div style={{height:'80px'}}>

</div>

{/* <div className='mywork'>

</div> */}


<Segment style={{ padding: '4em 0 6em 0em' }}vertical>
 
 
<div className='card-containers'  >

      
  <div className='image-container'>
 <div className='pic'>
 <Image className='image__img'  src={AdminApp}   />
 <div className='image__overlay image__overlay--blur'>

<div style={{padding:'20px'}}>
   <h2> Admin App</h2>
   <br></br>
 <p> A language learning educational app built with React and Semantic 
   UI front-end framework, NodeJs and express back-end, JWT and local 
   authentication, and MongoDB. Users can practice and review their 
   progress and teachers can assign exercises.</p>
   <p>Made using: HTML, CSS, JavaScript, Semantics UI, React, NodeJs, Mongo, PassportJS and Heroku.
</p> 
<br></br>
<a href='https://carnatakehomeproject.herokuapp.com/' target='_blank'>
<i style={{color:'white'}}className="fas fa-link link"></i>

</a>
<a href='https://github.com/fanuelalem/AdminApp' target='_blank'>
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
 <p> This application is a helpful tool that helps you save stocks onto a personal wathclist. It provides information on the stock markets top 10 winners and losers of the day. 
Users can also search and track any stock in the market and view stocks that are trending among other users.</p>
 <p>Made using: HTML, CSS, JavaScript, Semantics UI, React, NodeJs, Mongo, PassportJS and Heroku.
</p> 
<br></br>
<a href='https://stocktracker10for10.herokuapp.com/' target='_blank' > 
<i style={{color:'white'}}className="fas fa-link link"></i>

</a>
<a href='https://github.com/fanuelalem/Project-3' target='_blank'>
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

   </div>
   
  </div>
  
  <br></br>
  <br></br>

  <a href='https://fanuel-portfolio.herokuapp.com/portfolio'>

  <Button color="gray"size='large'>see more</Button>
    </a> 


 
</Segment>

{/* <Segment style={{ padding: '6em 0em' }}vertical>
<Container  text>

 
<Header  as='h3' style={{ fontSize: '4em' }}>

   <span id='sayhello' style={{fontFamily:"'Montserrat', sans-serif",color:"#284053" }} > Say Hello</span> 
        </Header>
<br></br>
        <p style={{ fontSize: '1.2em' }} className='descrip'>Reach out and say hi or connect with me. I look forward to hearing from you.



</p>
<br></br>
<a href='mailto:fanuelnalem@outlook.com'>
<Button color="linkedin"size='large'> <Icon name='mail'> </Icon> email me</Button>

</a>
  
  <br></br>
  <br></br>
  <br></br>




<div>        
 <a href='https://www.linkedin.com/in/fanuel-alem-12991b32/' target="_blank"> <Icon color='black'style={{fontSize:'2.8rem'}}name='linkedin'></Icon></a>  
 <a href='https://github.com/fanuelalem' target="_blank"><Icon color='black' style={{fontSize:'2.8rem'}}name='github'></Icon> </a>   
</div>
       </Container>
 
</Segment> */}

   
 

 

                            
                           
                           
                           </div>
                           
         )
    }
}
