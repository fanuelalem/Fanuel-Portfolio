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
 
 import happytravel from './../../component/Images/happytrav.png'
 import jedipic from './../../component/Images/jedipic.png'
 import stock from './../../component/Images/stock.png'
 import pwgenerator from './../../component/Images/password-generator.png'
 import weather from './../../component/Images/weather.png'
 import quiz from './../../component/Images/quiz-app.png'
 import Resume from './../../component/Images/FAResume.pdf'
 import buil from './../../component/Images/buil.jpg'
 import spic from './../../component/Images/jj.png'

import { right } from '@popperjs/core'
  
 
export default class About extends Component {
    
 
    render() {

         return (
            <div>
 



   <div className="background" >

<div className="info">

<Container fluid>

<Grid divided='vertically'>
    <Grid.Row columns={2}>
      <Grid.Column width={5}>


      </Grid.Column>
      <Grid.Column width={11}>

      <h1 className='name'style={{fontSize:"110px",lineHeight:"1.2",fontWeight:'bold',textAlign:'left'}} > 
      Fanuel Alem
            
       </h1>

       <p className='pname' style={{padding:'0 0 0 0',color:"white",backgroundColor:"#FFA46B",padding:'12px 0 6px 10px'}} >  Full-Stack Web Developer <br></br></p>

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
  

  <p style={{textAlign:'left',fontSize:"16px",fontWeight:"200"}} className='txt-2'>Hi, I am a Full stack web developer leveraging a background in client management and 
            product engineering in the tech industry to help build intuitive, engaging, and pleasant
             user experiences on the web. I recently transitioned into web development and was previously 
             an account manager at a tech company helping non-profits, charities, and churches gain access to 
             technology tools like google products. In my role, I managed 100-200 different clients per day who 
             showed me their websites for verification purposes. The frequent exposure to different kinds of websites
              per day triggered my curiosity for web development. While business was my primary focus in college, I was 
             heavily engaged in computer science courses as well. My first experience with web development was when I 
              was a student at San Francisco State University taking computer science courses and building a simple blog 
              website on a small team. I have become a part time web developer building new features for a startup and 
              currently helping them scale.</p>

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
            <Button color="linkedin"size='large'>View my resume.</Button>

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
        <Header as='h3' style={{ fontSize: '4em',color:"white",fontFamily:"'Montserrat', sans-serif" }}>
Skills
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

<Segment style={{ padding: '6em 0em' }}vertical>
<Container  text>

 
<Header as='h3' style={{ fontSize: '4em' }}>
Portfolio
        </Header>

        <p style={{ fontSize: '1.2em' }}>Here's a selection of work I've done.

</p>
<br></br>
       
      </Container>
 
<div className='card-containers'  >

      
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

 {/* <div className='pic'>
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

 </div> */}

  {/* <Image style={{margin:'.5rem'}}src={happytravel} size='large' /> */}
  {/* <Image style={{margin:'.5rem'}}src={stock} size='large' /> */}

   </div>
  </div>
  <br></br>
  <br></br>

  <a href='https://fanuel-portfolio.herokuapp.com/portfolio'>

  <Button color="linkedin"size='large'>see more</Button>
    </a> 


 
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
  <br></br>




<div>        
 <a href='https://www.linkedin.com/in/fanuel-alem-12991b32/' target="_blank"> <Icon color='black'style={{fontSize:'2.8rem'}}name='linkedin'></Icon></a>  
 <a href='https://github.com/fanuelalem' target="_blank"><Icon color='black' style={{fontSize:'2.8rem'}}name='github'></Icon> </a>   
</div>
       </Container>
 
</Segment>
<Container fluid>

     <p text className="para"style={{backgroundColor:'#1b1c1d',color:'white',padding:'20px'}}>
       <a style={{color:'white'}} href='http://localhost:3000/'>
       © 2020 Copyright Fanuel Alem.

       </a>
      <span className='spann'>
<span className='git-icon'>
  <a style={{color:'white'}}href='https://github.com/fanuelalem' target="_blank"> <Icon style={{fontSize:'1.7rem'}}name='github'></Icon>
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
                           
         )
    }
}
