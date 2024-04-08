import React from 'react'
import banner from '../iamge/banner.webp';
import Google from '../iamge/GooglePlayButton.png';
import Apple from '../iamge/apple.jpg';
function Section() {
  return (
    <div>
      
<div className="container mt-5 mb-5 section">
  <div className="row">
    <div className="col-md-6 text-white header-one">
      <h1 className='' style={{lineHeight:'52.8px',fontFamily:'Sigmar One',fontWeight:'800'}}>TOURNAMENTS MADE <span style={{color:'darkcyan'}}>SIMPLE</span> </h1>
  <h6>GRID IS A Mobile and Web Solution For Oraganizing Gaming Events End To End</h6>

<a href="#" className='me-2'>
  <img src={Google} alt="" width="200" className='img-fluid' />
</a>
<a href="#">
  <img src={Apple} alt="" width="200" className='img-fluid' />
</a>
       
    </div>
    <div className="col-md-6 header-img">
<img src={banner} alt=""  className='img-fluid' />
    </div>
  </div>
</div>
    </div>
  )
}

export default Section
