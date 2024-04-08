import React from 'react'
import logo from '../iamge/logo.webp';
function Footer() {
  return (
    <div className='container mt-5 footer'>
      <div className="row">
        <div className="col-md-3 foo">
<img src={logo}  alt="logo" width="100" height="100" className='img-fluid' />
<p className='text-white p-3'>Made for Gamers by Gamers</p>
        </div>
        <div className="col-md-3 foo">
            <h4>Quick Links</h4>
          <li>  <a href="">Home</a> </li>
          <li>
          <a href="">About Us</a>
            </li> 
            <li>
            <a href="">Contact Us</a>
                </li> 
            <li>
            <a href="">Privacy Policy</a>

            </li>
            <li>

            <a href="">Terms and Conditions</a>
            </li>
        </div>
        <div className="col-md-3 foo">
            <h4>Contact Us</h4>
            <a href="" className='text-white' style={{textDecoration:'none'}}>info@gridgamers.com</a>
        </div>
        <div className="col-md-3 foo">
        <h4>Follow Us</h4>
        <i class="fab fa-facebook"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-instagram-square"></i>
        </div>
      </div>

      <div className="container copyright ">
   <p className='text-white text-center mt-4 pb-4'>Copyright © 2024. Gridgaming. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
