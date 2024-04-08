import React, { useEffect, useState } from 'react';
import Menu from './Api';
import img1 from '../iamge/first.webp';

import Google from '../iamge/GooglePlayButton.png';
import Apple from '../iamge/apple.jpg';
import MSwiper from './Swiper';
function Feature() {
 
const [menu,setmenu]=useState(Menu);

const [selectedImage, setSelectedImage] = useState(null);
const [selectedBox, setSelectedBox] = useState(null);
const seeit = (val) => {
    const menuItem = menu.find(item => item.id === val);
    setSelectedBox(val);
    if (menuItem) {
        setSelectedImage(menuItem.image); 
       
    } else {
        console.log("Menu item not found with ID:", val);
    }
}


  return (
    <div className='container features mt-5'>
      <h2 className='' style={{color:'darkcyan', fontSize:'3rem',fontWeight:'bolder'}}>Our Mobile App Features</h2>
      <div className="row">
        <div className="col-md-7 feature">
            <div className="row">
                <div className="col-md-6 text-white">
                    <div className={`box mb-2 ${selectedBox === 1 ? 'selected' : ''}`}  onClick={()=>seeit(1)}>
                   <h4>   <i class="fab fa-discord"></i> Discover</h4>
                        <p>Explore upcoming sports events, news, and trending gaming content effortlessly</p>
                    </div>
                    <div className={`box mb-2 ${selectedBox === 3 ? 'selected' : ''}`}   onClick={()=>seeit(3)}>
                        <h4> <i class="fas fa-link"></i> Tournament Management</h4>
                        <p>Organize, schedule and promote eSports tournaments with powerful event management tools</p>
                    </div>
                    <div className={`box mb-2 ${selectedBox === 5 ? 'selected' : ''}`}  onClick={()=>seeit(5)}>
                        <h4> <i class="fas fa-gamepad"></i> Gaming Database</h4>
                        <p>Access a vast repository of games including, stats, guides and eSports insights</p>
                    </div>
                    <div className="text mt-5">
                   <h3>Available For Download</h3> 
                    </div>
                </div>
                <div className="col-md-6 text-white">
                <div className={`box mb-2 ${selectedBox === 2 ? 'selected' : ''}`}  onClick={()=>seeit(2)}>
                <h4> <i class="fas fa-link"></i> Connect</h4>
                        <p>Stay connected with fellow gamers, create teams, and chat</p>
                    </div>
                    <div className={`box mb-2 ${selectedBox === 4 ? 'selected' : ''}`}  onClick={()=>seeit(4)}>
                        <h4> <i class="fas fa-people-carry"></i> Team Creation   </h4>
                        <p>Assemble and manage sports teams efficiently, enhancing your competitve gaming experience</p>
                    </div>
                    <div className={`box mb-2 ${selectedBox === 6 ? 'selected' : ''}`}  onClick={()=>seeit(6)}>
                        <h4> <i class="fas fa-braille"></i> Dynamic Bracketology</h4>
                        <p>Experience real-time bracket updates and results for your favorite eSports tournaments</p>
                    </div>
                    <div className="imge mt-5">
                        
<a href="#" className=' mt-2'>
  <img src={Google} alt="" width="150" className='img-fluid' />
</a>
<a href="#">
  <img src={Apple} alt="" width="150" className='img-fluid' />
</a>
                    </div>
                </div>
                
            </div>
        </div>
        <div className="col-md-4 imge">
          
{selectedImage ? (
                <img src={selectedImage} alt="Selected Image" width='500' height='750' />
            ) : (
                <img src={img1} alt="Default Image" width='500' height='750' />
            )}

        </div>
      </div>


      <div className="again">
      <MSwiper/>
      </div>
    </div>
  )
}

export default Feature
