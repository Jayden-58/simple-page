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
    <Navbar dark style={{background: "black"}} sticky='top' className='navbar-expand-md' expand='md'>
        <NavbarBrand className='ms-5' href='/'>
            <img src={jayden_image} style = {imgSize} alt="jklogo" className='float-start' />
        </NavbarBrand>
        <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>
        <Collapse isOpen={menuOpen}navbar>
          <Nav className = 'ms-auto' navbar>
          <NavItem>
              <NavLink className='nav-link' style={{color: '#722F37'}} to='/'>
                <i className= 'fa fa-home fa-thin'/> Home
              </NavLink>
              <NavLink className='nav-link' style={{color: '#722F37'}} to='education'>
              <i className='fa fa-book fa-thin' /> Education
              </NavLink>
              <NavLink className='nav-link' style={{color: '#722F37'}} to='games'>
                <i className='fa fa-gamepad fa-thin' /> Games
              </NavLink>
              <NavLink className='nav-link' style={{color: '#722F37'}} to='websites'>
                <i className='fa fa-globe fa-thin' /> Websites
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
    </Navbar>
  )
}

export default Header;