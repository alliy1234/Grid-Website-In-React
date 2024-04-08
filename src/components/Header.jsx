import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../iamge/logo.webp';

function Header() {
  return (
  <>
    <div className=' container-fluid header  p-3 '>
      

 <div className=" container fxed">
      <div className="left">
       <img src={logo} alt="logo" width="100" height="100" className='img-fluid' />
      </div>
      <div className="right">
        <div className='nav'>
        <NavLink exact to="/home"  activeClassName="active">Home</NavLink>
        {/* <NavLink exact to="/"  activeClassName="active">Home</NavLink> */}
<NavLink to="/about"  activeClassName="active">About</NavLink>
<NavLink to="/contact"  activeClassName="active">Contact</NavLink>
        </div>
        <div className='btne'>
<button className='btn btn-outline-info w-100'>Become Hub</button>
        </div>
      </div>
     
      </div>


      <div className="another container-fluid">
        <div className="home-nav">
        <i class="fa-solid fa-circle-exclamation"></i> <br />
        <NavLink to='/' activeClassName="active" >Home</NavLink>
        </div>
        <div className="about-nav">
        <i class="fa-solid fa-house"></i><br />
        <NavLink to='/about'  activeClassName="active">About</NavLink>
        </div>
        <div className="about-nav">
        <i class="fa-solid fa-comment-sms"></i><br />
        <NavLink to='/contact'  activeClassName="active">Contact</NavLink>
        </div>
      </div>

    </div>





</>
   
  )
}

export default Header
