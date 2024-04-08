import React from 'react'

const  Video=({src})=>{
  return (
    <div className='container me-auto ms-auto mt-5 videos'>
     <div className="video">
     {/* <iframe width="1100" height="600" src="https://www.youtube.com/embed/4hkw_0R66pA?si=Srmzb32BBKOeWxM2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
        {/* { React.cloneElement(iframe,{src})} */}
        
          <iframe 
        width="1300" 
        height="600" 
        src={src} 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen
      ></iframe>
         
       
        </div>
     
    </div>
  )
}

export default Video
