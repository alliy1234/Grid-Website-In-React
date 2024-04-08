import React from 'react'
import Header from './Header'
import Footer from './Footer';
function Contact() {
  return (
    <div>
      <Header/>
      <div className="container text-white  mt-5">
        <h1 className='text-center '>Contact us</h1>
        <p className='text-center mb-5 '>Get in Touch With Us</p>
          <form action="https://formspree.io/f/xnqegwng" method='post' className='forme'>
        <div className="row ">
           
            <div className="col-md-6 col-sm-10 mb-3 one">
          <label htmlFor="" className='form-label'>Full Name</label><br />
          <input type="text" name="name" required className='w-75 h-75 p-2' placeholder='Enter Your Full Name' id="" />
           </div>

            <div className="col-md-6 col-sm-10 mb-3 one ">
            <label htmlFor="" className='form-label'>Email</label><br />
    <input type="email" name="email" required className='w-75 h-75 p-2' id="" placeholder='Enter Your Email Address' />
            </div>

            <div className="col-md-6 col-sm-10 mb-3 one">
            <label htmlFor="" className='form-label'>Phone Number</label><br />
    <input type="text"  className='w-75 h-75 p-2' required placeholder='Enter Your phone Number' name="number" id="" />
            </div>


            <div className="col-md-6 col-sm-10 mb-3 one">
            <label htmlFor="" className='form-label'>Potential</label><br />
           <select name="User" id="" required  className='w-75 h-75 p-2'>
<option value="Customer">Customer</option>
<option value="Investors">Investor</option>
<option value="Other">Other</option>
           </select>
            </div>



            <div className="col-md-10">
            <label htmlFor="" className='form-label'>Message</label><br />
              <textarea name="message" id="" className='' cols="" rows="5" required placeholder='Type here..'></textarea>
            </div>
            <div>
            <input type="checkbox" name="" id="" /> By checking this box you agreed to receive an SMS from us
            </div>
          <div>
            <button className='btn btn-primary  mt-3 mb-5'>Send Message</button>
          </div>
        </div>
          </form>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact
