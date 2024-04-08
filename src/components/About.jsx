import React from 'react'
import Header from './Header'
import Google from '../iamge/GooglePlayButton.png';
import Apple from '../iamge/apple.jpg';
import Footer from './Footer';

function About() {
  return (
    <div>
      <Header/>
      <div className="container about">
        <div className="row  main mt-5 ">
            <div className="col-md-6 text text-white ">
                <h1>What is Grid.</h1>
                <p>GRID is a first of its kind mobile events and gaming app where you can meet other gamers and show your skills by attending events and tournaments. Compete against top ranked gamers and claim your spot on national scoreboards.</p>
                <div className="boxi">
                    <div>Avaliable For Download</div>
                    <div>
                    <a href="#" className='me-2'>
  <img src={Google} alt="" width="100" className='img-fluid' />
</a>
<a href="#">
  <img src={Apple} alt="" width="100" className='img-fluid' />
</a>
                    </div>
                </div>
            </div>
            <div className="col-md-5 ">
            <iframe width="500" height="315" src="https://www.youtube.com/embed/0vrkk_Bk0BU?si=ebrU64UFfzjEEjp7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
      </div>



{/* backgorund */}
      <div className="background text-white text-center mt-5 container-fluid">
    <h1 className='p-4' >Our Background</h1>

    <p className='w-75 me-auto ms-auto'>GRID was started in 2021 by two brothers in Dallas, Texas, who were passionate about gaming. We started out as an events management company, but soon realized the need for an automated solution for both businesses to host and manage events, and for gamers to get equal access to competitions. At the same time, we noticed that the top 10% of gamers get access to all the earning opportunities in the space, while the bottom 90% are left out.</p>
""
    <p  className="w-75 me-auto ms-auto">And so, GRID was born as a B2B2C solution. For businesses, we developed a first-of-its-kind mobile events and gaming app where gamers can meet other gamers and show their skills by attending events and tournaments, compete against top-ranked gamers, and claim their spot on national scoreboards. For gamers, we developed a mobile app to allow them to connect with like-minded gamers and quickly engage in competitions, by equipping them with the best tournament tools in the market.</p>
</div>
<Footer/>
    </div>
  )
}

export default About
