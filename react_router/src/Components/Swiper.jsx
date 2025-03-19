import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';

function Swiper1() {
    return (
        <>
        <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>    <img style={{"width":"80%" ,"height":"150px","marginLeft":"140px"}} src="https://static.vecteezy.com/system/resources/previews/000/669/988/original/vector-shopping-online-banner.jpg"/>
        </SwiperSlide>
        <SwiperSlide>    <img style={{"width":"80%" ,"height":"150px","marginLeft":"140px"}} src="https://img.freepik.com/premium-vector/modern-sale-banner-website-slider-template-design_54925-45.jpg?w=2000"/>
        </SwiperSlide>
        <SwiperSlide>    <img style={{"width":"80%" ,"height":"150px","marginLeft":"140px"}} src="https://www.creativefabrica.com/wp-content/uploads/2021/04/26/Creative-Fashion-Sale-Banner-Graphics-11345601-1.jpg"/>
        </SwiperSlide>
      
      </Swiper>
      </>
    )
}

export default Swiper1
