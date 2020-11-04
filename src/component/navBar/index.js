
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



  <Menu size='massive' secondary className='inverteds' >
        <Menu.Menu position='left'>
 
           <Menu.Item>
           <div>
    {/* <Image src='portfolio.png' avatar /> */}
    <span style={{color:'white'}}>Fanuel Alem</span>
  </div>
          {/* <p style={{color:'white'}}>Fanuel Alem</p> */}
          </Menu.Item>
</Menu.Menu>
<Menu.Menu position='right'>
    
    <Menu.Item
    as={Link}
    to='/'
    name='About'
    active={activeItem === 'About'}
    onClick={this.handleItemClick}
          >
        <p style={{color:'white'}}>About</p>

          </Menu.Item>

           <Menu.Item
            as={Link}
            to='/portfolio'
            name='Portfolio'
            active={activeItem === 'Portfolio'}
            onClick={this.handleItemClick}
            >
              <p style={{color:'white'}}>Portfolio</p>
              </Menu.Item>
           <Menu.Item
            // as={Link}
             name='Contact'
            active={activeItem === 'Contact'}
            onClick={this.handleItemClick}>

 <a href='#sayhello' >
 <p style={{color:'white'}}>Contact</p>

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
