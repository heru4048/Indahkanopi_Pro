import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';

export default function Hero(){
  return (
    <section className="hero container" id="hero">
      <div className="hero-grid">
        <div className="hero-content">
          <h1>Temukan Rumah & Tanah Impian Anda</h1>
          <p>Indahproperty Pro membantu Anda menemukan properti terbaik dengan layanan profesional, proses cepat, dan tanpa ribet.</p>
          <div className="cta">
            <button className="btn btn-primary">Lihat Portfolio</button>
            <a className="btn-rounded" href="https://wa.me/6281234567890" target="_blank" rel="noreferrer">
              Chat WA
            </a>
          </div>
        </div>
        <div className="slider-wrap">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{delay:3000, disableOnInteraction:false}}
            loop={true}
            pagination={{clickable:true}}
            spaceBetween={20}
          >
            <SwiperSlide>
              <img src="/src/assets/slide1.jpg" alt="slide1" style={{width:'100%', borderRadius:10}} />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/src/assets/slide2.jpg" alt="slide2" style={{width:'100%', borderRadius:10}} />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/src/assets/slide3.jpg" alt="slide3" style={{width:'100%', borderRadius:10}} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
}
