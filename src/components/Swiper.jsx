import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import img1 from '../iamge/first.webp';
import img2 from '../iamge/connect.webp';
import img3 from '../iamge/TournamentManagement.webp';
import img4 from '../iamge/TeamCreation.webp';
import img5 from '../iamge/Games1.webp';
import img6 from '../iamge/DynamicBracketology1.webp';

const MSwiper = () => {
  return (
    <>
      <Swiper
        style={{
          // '--swiper-navigation-color': '#fff',
          // '--swiper-pagination-color': 'darkcyan',
          //  '--swiper-pagination-backgroundColor':'red',
            width:"600px",
            height:"750px"
        }}
        lazy={true}
        pagination={{
          clickable: true,
        }}
       
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className=''>
          <img
            src={img1}
            loading="lazy"
            className='img-fluid' 
            width="300"
            height="300"
            style={{marginLeft:"8rem",marginBottom:"1rem"}}
          />
          <div className="text-white text-center hov">
          <h4>   <i class="fab fa-discord"></i> Discover</h4>
                        <p>Explore upcoming sports events, news, and trending gaming content effortlessly</p>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img2}
            loading="lazy"
            className='img-fluid me-5' 
            width="300"
            height="300"
            style={{marginLeft:"8rem",marginBottom:"1rem"}}
          />
          <div className="text-white text-center hov">
          <h4> <i class="fas fa-link"></i> Connect</h4>
                        <p>Stay connected with fellow gamers, create teams, and chat</p>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img3}
            loading="lazy"
            className='img-fluid me-5' 
            width="300"
            height="300"
            style={{marginLeft:"8rem",marginBottom:"1rem"}}
          />
          <div className="text-white text-center hov">
          <h4> <i class="fas fa-link"></i> Tournament Management</h4>
                        <p>Organize, schedule and promote eSports tournaments with powerful event management tools</p>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img4}
            loading="lazy"
            className='img-fluid me-5' 
            width="300"
            height="300"
            style={{marginLeft:"8rem",marginBottom:"1rem"}}
          />
          <div className="text-white text-center hov">
          <h4> <i class="fas fa-people-carry"></i> Team Creation   </h4>
                        <p>Assemble and manage sports teams efficiently, enhancing your competitve gaming experience</p>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img5}
            loading="lazy"
            className='img-fluid me-5' 
            width="300"
            height="300"
            style={{marginLeft:"8rem",marginBottom:"1rem"}}
          />
          <div className="text-white text-center hov">
          <h4> <i class="fas fa-gamepad"></i> Gaming Database</h4>
                        <p>Access a vast repository of games including, stats, guides and eSports insights</p>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img6}
            loading="lazy"
            className='img-fluid me-5' 
            width="300"
            height="300"
            style={{marginLeft:"8rem",marginBottom:"1rem"}}
          />
          <div className="text-center text-white hov">
          <h4> <i class="fas fa-braille"></i> Dynamic Bracketology</h4>
                        <p>Experience real-time bracket updates and results for your favorite eSports tournaments</p>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
       
      </Swiper>
    </>
  )
}

export default MSwiper