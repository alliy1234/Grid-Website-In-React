import React from 'react'


import Section from './Section';
import Working from './working';
import Video from './Video';
import Gameon from './Gameon';
import Feature from './Feature';
import Event from './Event';
import Footer from './Footer';
import Header from './Header';
function Home() {
  const inital="https://www.youtube.com/embed/4hkw_0R66pA?si=Srmzb32BBKOeWxM2";
  const final="https://www.youtube.com/embed/tKK1W3ADNCA?si=aYsr2qjULhpUf6St";
  return (
    <div className='parent container-fluid'>
   
<Header/>
   <Section/>
   <Working/>
   <Video src={inital}/>
   <Gameon/>
   <Video src={final}/>
   <Feature/>
   <Event/>
   <Footer/> 
    </div>
  )
}

export default Home
