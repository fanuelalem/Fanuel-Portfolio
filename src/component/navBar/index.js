
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
                <div className="navy" >



  <Menu secondary   >
      
        <Menu.Menu>
 
           <Menu.Item>
           <div>
     <h3 className='nav-text'> <a className='name-nav' style={{fontSize:"20px"}}   href='https://fanuel-portfolio.herokuapp.com/'>  Fanuel Alem  </a>  </h3>
  </div>
           </Menu.Item>
</Menu.Menu>
<Menu.Menu 
 position='right'
>
    
    <Menu.Item
    as={Link}
    to='/'
    activeClassName='about-sec'
    name='About'
    active={activeItem === 'About'}
    onClick={this.handleItemClick}
          >
         <h3 className='nav-text'>
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
 <h3 className='nav-text' >Contact</h3>

 </a>
 
            
 
          </Menu.Item>
         
</Menu.Menu>
        </Menu>

            </div>
            </div>
        )
    }
}
