
import React, { Component } from 'react'

import {
    Container,
    Header,
    Button,
    Icon,
    Grid,
    Menu,
    Segment,Image,Divider,

} from 'semantic-ui-react'

// import sayhello from './../../container/About/about'
 
import { Link } from 'react-router-dom';
 
 
export default class NavBar extends Component {
    state = { activeItem: [] }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render(props) {
        const { activeItem } = this.state

        return (
            <div>
                <div className="navy">



  <Menu   secondary className='inverteds' >
        <Menu.Menu position='left'>
 
           <Menu.Item>
           <div>
    {/* <Image src='portfolio.png' avatar /> */}
    <span className='nav-text'  ><h3>Fanuel Alem </h3> </span>
  </div>
          {/* <p style={{color:'white'}}>Fanuel Alem</p> */}
          </Menu.Item>
</Menu.Menu>
<Menu.Menu position='right'>
    
    <Menu.Item
    as={Link}
    to='/'
    activeClassName='about-sec'
    name='About'
    active={activeItem === 'About'}
    onClick={this.handleItemClick}
          >
         <h3 className='nav-text'  >
            About </h3>
 
          </Menu.Item>

           <Menu.Item
            as={Link}
            to='/portfolio'
            name='Portfolio'
            active={activeItem === 'Portfolio'}
            onClick={this.handleItemClick}
            >
              <h3 className='nav-text'  >Portfolio</h3>
              </Menu.Item>
           <Menu.Item
            // as={Link}
             name='Contact'
            active={activeItem === 'Contact'}
            onClick={this.handleItemClick}>

 <a href='#sayhello' >
 <h3 className='nav-text'  >Contact</h3>

 </a>
 
            
 
          </Menu.Item>
          {/* <Menu.Item
            as={Link}
             name='Learn'
            active={activeItem === 'Learn'}
            onClick={this.handleItemClick}
          >
    <p style={{color:'white'}}>Learn</p>
    </Menu.Item> */}
</Menu.Menu>
        </Menu>

            </div>
            </div>
        )
    }
}
