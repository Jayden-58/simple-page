import {useState} from 'react';
import {Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem} from 'reactstrap'
import { NavLink } from 'react-router-dom';
import jayden_image from '../app/assets/jk_logo_temp.png'

const imgSize = {
    maxWidth: 60
}



const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Navbar dark color='primary' style={{background: "black"}} id = 'header' sticky='top' expand='md'>
        <NavbarBrand href='/'>
            <img src={jayden_image} style = {imgSize} className='ms-5'/>
        </NavbarBrand>
        <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>
        <Collapse isOpen={menuOpen}navbar>
          <Nav className = 'ms-auto' navbar style = {{margin: 0, padding:4}}>
          <NavItem>
              <NavLink className='nav-link' style={{color: '#9E5EFF'}} to='/'>
                <i/> Home
              </NavLink>
              <NavLink className='nav-link' style={{color: '#9E5EFF'}} to='education'>
                <i className='fa fa-home fa-lg' /> Education
              </NavLink>
              <NavLink className='nav-link' style={{color: '#9E5EFF'}} to='/'>
                <i className='fa fa-home fa-lg' /> Games
              </NavLink>
              <NavLink className='nav-link' style={{color: '#9E5EFF'}} to='/'>
                <i className='fa fa-home fa-lg' /> Websites
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
    </Navbar>
  )
}

export default Header;