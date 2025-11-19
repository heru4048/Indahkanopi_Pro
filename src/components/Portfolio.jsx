import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

export default function Portfolio(){
  return (
    <section className="section container" id="portfolio">
      <h2>Portfolio</h2>
      <div style={{marginTop:16}}>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          breakpoints={{
            0:{slidesPerView:1},
            600:{slidesPerView:2},
            900:{slidesPerView:3}
          }}
          autoplay={{delay:2500, disableOnInteraction:false}}
          spaceBetween={12}
        >
          <SwiperSlide><div className="card"><img src="/src/assets/port1.jpg" alt="" style={{width:'100%', borderRadius:8}}/></div></SwiperSlide>
          <SwiperSlide><div className="card"><img src="/src/assets/port2.jpg" alt="" style={{width:'100%', borderRadius:8}}/></div></SwiperSlide>
          <SwiperSlide><div className="card"><img src="/src/assets/port3.jpg" alt="" style={{width:'100%', borderRadius:8}}/></div></SwiperSlide>
          <SwiperSlide><div className="card"><img src="/src/assets/port4.jpg" alt="" style={{width:'100%', borderRadius:8}}/></div></SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}
