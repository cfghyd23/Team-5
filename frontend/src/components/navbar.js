import React, {usestate} from 'react'
import {Link as Lnk} from 'react-router-dom'
import {useState} from 'react'
import Logo from '../images/logo.png'
import '../css/navbar.css'

function Navbar() {
  const [nav,setnav] = useState(false);

  const changeBackground = () => {
      if (window.scrollY >= 5) {
          setnav(true);
      }
      else{
          setnav(false);
      }
    }   

    window.addEventListener('scroll', changeBackground);

  return(
    <>
  <nav className={nav ? 'nav-active': 'nav'}>
  
      
  {/* <Lnk to="/" className = "logo2">BPS</Lnk>
  <h5 className='smalltext'>By Focus Energy Limited</h5> */}

      
      {/* <li><Link to="#">LOGO</Link></li> */}

    <input className= "menu-btn" type= 'checkbox' id='menu-btn'/>
    <label className = "menu-icon" for="menu-btn" >
    <span className="nav-icon"></span>
    </label>
    <ul className= "menu">
        <div className='nav-links'><li><Lnk to="/" >Home</Lnk></li></div>
        <div className='nav-links'><li><Lnk to="/search">Search</Lnk></li></div>
        <div className='logo-container'><li className='logo-link'><Lnk to='/' className="logo" >
        <img src={Logo} alt=''/>
        </Lnk></li></div>
        <div className='nav-links'><li><Lnk to="/about" >About</Lnk></li></div>
        <div className='nav-links'><li><Lnk to="/contact" >Contact Us</Lnk></li></div>
             
    </ul>

  </nav>
</>
  )
  }
export default Navbar;