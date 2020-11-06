import React, { Component } from 'react'
import './../../index.css'
 import {
    Container,
    Header,
    Button,
    Icon,
    Grid,
    Menu,
    Segment,Image,Divider,Card

} from 'semantic-ui-react'
 import pic from './../../component/Images/dsd.jpg'
 import happytravel from './../../component/Images/happytrav.png'
 import jedipic from './../../component/Images/jedipic.png'
 import stock from './../../component/Images/stock.png'
 import pwgenerator from './../../component/Images/password-generator.png'
 import weather from './../../component/Images/weather.png'
 import quiz from './../../component/Images/quiz-app.png'
 import Resume from './../../component/Images/FAResume.pdf'

import { right } from '@popperjs/core'
  
 
export default class About extends Component {
    
 
    render() {

         return (
            <div>
 
  
   <div className="background"style={{minHeight:'700px'}}>

<div className="info">

<Container >

<Header  inverted
         style={{
        fontSize: '4.3em',
        // fontWeight: 'normal',
        }}
    >
       <p className='name'
> Hello, I'm Fanuel. </p>
    </Header>

<Header  
inverted
        style={{
        fontSize: '2em',
        // fontWeight: 'normal',
        
        }}
    >
  
      <p className='name'>  I'm a full-stack web developer based in the Bay Area.</p>
        
      </Header>

      {/* <Button primary size='huge'>
      Get Started
      <Icon name='right arrow' />
    </Button>

    
      <Grid>
        <Grid.Row columns={1}>
          <Grid.Column />
        </Grid.Row>
      </Grid>
      <Button animated>
      <Button.Content visible>Next</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
    </Button>
    <Button animated='vertical'>
      <Button.Content hidden>Shop</Button.Content>
      <Button.Content visible>
        <Icon name='shop' />
      </Button.Content>
    </Button>
    <Button animated='fade'>
      <Button.Content visible>Sign-up for a Pro account</Button.Content>
      <Button.Content hidden>$12.99 a month</Button.Content>
    </Button> */}

    </Container>

    </div>

       </div>

        

    <div style={{textAlign:'left',marginBottom:'25px'}}>
    Photo by <a href='https://www.pexels.com/@scottwebb'>Scott Web</a> from <a href="https://www.pexels.com/">Pexels</a> </div>
 
         <Segment style={{padding:'8em 0em'}}  vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2.5em' }}>
         <span id='about-me'> About me </span>             
          </Header>
          <br>
          </br>
            <p style={{ fontSize: '1.2em' }}>
              Initially, as I was exploring opportunities in business at San Francisco State University, 
              I became an account manager for a tech company. In my role, I managed 100-200 different clients 
              per day and got a chance to view their websites during the verification process.
              The frequent exposure to different kinds of websites per day inspired me to become a web developer. 
              My first experience with web development was when I was a student at San Francisco State University
              taking computer science courses and building a simple blog website on a small team.   

            </p>
           <br></br>

           <p style={{ fontSize: '1.2em' }}>
              Most Recently earned a certificate in full stack web development from the 
              University of California, Berkeley, with newly developed 
              front end and back end skills including JavaScript, CSS, React.js, 
              responsive web design, Node.js, API interface, SQL, and mongoose. 
              Known as an innovative critical thinker that enjoys solving problems 
              and passionate about developing full stack applications. 
              With each project, my aim is to introduce efficient solutions 
              to users and engage my audience for an impactful user experience. 
              I’m excited to leverage my skills as part of a fast-paced, quality-driven
               team to build better experiences on the web. 
             

            </p>            <p style={{ fontSize: '1.33em' }}>
              {/* As a business student I explored opportunities  */}
                          </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
          <Image className='image-bio' src={pic} />
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
            
 

 

  <Segment style={{ padding: '6em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '4em' }}>
Skills
        </Header>
<br></br>
        <Grid divided='vertically'>
    <Grid.Row columns={6}>
      <Grid.Column>
      <div className="About-icon-div"><i style={{fontSize:'5.5rem'}}className="About-icon fab fa-html5"></i><p>HTML5</p></div>
      </Grid.Column>
      <Grid.Column>
      <div className="About-icon-div"><i style={{fontSize:'5.5rem'}}className="About-icon fab fa-css3-alt"></i><p>CSS3</p></div>
      </Grid.Column>
      <Grid.Column>
      <div className="About-icon-div"><i style={{fontSize:'5.5rem'}}className="About-icon fab fa-js"></i><p>JavaScript</p></div>

      </Grid.Column>
      <Grid.Column>
      <div className="About-icon-div"><i style={{fontSize:'5.5rem'}}className="About-icon fab fa-bootstrap"></i><p>Bootstrap</p></div>

      </Grid.Column>
      <Grid.Column>
       <div className="About-icon-div"><i style={{fontSize:'5.5rem'}}className="About-icon fab fa-react"></i><p>React</p></div>

      </Grid.Column>

<Grid.Column>
<div className="About-icon-div"><i style={{fontSize:'5.5rem'}}className="About-icon fab fa-node"></i><p>Node.js</p></div>

  </Grid.Column>

    </Grid.Row>

   
  </Grid>
 

        
      </Container>
    </Segment>
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
