import './Home.css'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Swiper1 from './swiper';



// import required modules
import { Pagination } from 'swiper/modules';

const Home=()=>{
    return(
        <>        <div className='cards' >
       
    <div className="card">
    <img src="https://img.freepik.com/premium-photo/shopping-cart-emitting-from-laptop-shopping-concept_932772-4177.jpg" alt="Item Image" className="card-img"/>

        <div className="card-content">
            <h3 className="item-name">Item Name</h3>
            <p className="item-description">This is a brief description of the item. It gives more context about the product.</p>
            <div className="pricing">
                <span className="original-price">$50.00</span>
                <span className="offer-price">$30.00</span>
            </div>
        </div>
    </div>
    <div className="card">
    <img src="https://img.freepik.com/premium-photo/shopping-cart-emitting-from-laptop-shopping-concept_932772-4177.jpg" alt="Item Image" className="card-img"/>

        <div className="card-content">
            <h3 className="item-name">Item Name</h3>
            <p className="item-description">This is a brief description of the item. It gives more context about the product.</p>
            <div className="pricing">
                <span className="original-price">$50.00</span>
                <span className="offer-price">$30.00</span>
            </div>
        </div>
    </div>
    <div className="card">
    <img src="https://img.freepik.com/premium-photo/shopping-cart-emitting-from-laptop-shopping-concept_932772-4177.jpg" alt="Item Image" className="card-img"/>

        <div className="card-content">
            <h3 className="item-name">Item Name</h3>
            <p className="item-description">This is a brief description of the item. It gives more context about the product.</p>
            <div className="pricing">
                <span className="original-price">$50.00</span>
                <span className="offer-price">$30.00</span>
            </div>
        </div>
    </div>
    <div className="card">
    <img src="https://img.freepik.com/premium-photo/shopping-cart-emitting-from-laptop-shopping-concept_932772-4177.jpg" alt="Item Image" className="card-img"/>

        <div className="card-content">
            <h3 className="item-name">Item Name</h3>
            <p className="item-description">This is a brief description of the item. It gives more context about the product.</p>
            <div className="pricing">
                <span className="original-price">$50.00</span>
                <span className="offer-price">$30.00</span>
            </div>
        </div>
    </div>
    <div className="card">
    <img src="https://img.freepik.com/premium-photo/shopping-cart-emitting-from-laptop-shopping-concept_932772-4177.jpg" alt="Item Image" className="card-img"/>

        <div className="card-content">
            <h3 className="item-name">Item Name</h3>
            <p className="item-description">This is a brief description of the item. It gives more context about the product.</p>
            <div className="pricing">
                <span className="original-price">$50.00</span>
                <span className="offer-price">$30.00</span>
            </div>
        </div>
    </div>
        </div>

        <Swiper1/>
       
        <div className='cards' >
       
       <div className="card">
       <img src="https://img.freepik.com/premium-photo/shopping-cart-emitting-from-laptop-shopping-concept_932772-4177.jpg" alt="Item Image" className="card-img"/>
   
           <div className="card-content">
               <h3 className="item-name">Item Name</h3>
               <p className="item-description">This is a brief description of the item. It gives more context about the product.</p>
               <div className="pricing">
                   <span className="original-price">$50.00</span>
                   <span className="offer-price">$30.00</span>
               </div>
           </div>
       </div>
       <div className="card">
       <img src="https://img.freepik.com/premium-photo/shopping-cart-emitting-from-laptop-shopping-concept_932772-4177.jpg" alt="Item Image" className="card-img"/>
   
           <div className="card-content">
               <h3 className="item-name">Item Name</h3>
               <p className="item-description">This is a brief description of the item. It gives more context about the product.</p>
               <div className="pricing">
                   <span className="original-price">$50.00</span>
                   <span className="offer-price">$30.00</span>
               </div>
           </div>
       </div>
       <div className="card">
       <img src="https://img.freepik.com/premium-photo/shopping-cart-emitting-from-laptop-shopping-concept_932772-4177.jpg" alt="Item Image" className="card-img"/>
   
           <div className="card-content">
               <h3 className="item-name">Item Name</h3>
               <p className="item-description">This is a brief description of the item. It gives more context about the product.</p>
               <div className="pricing">
                   <span className="original-price">$50.00</span>
                   <span className="offer-price">$30.00</span>
               </div>
           </div>
       </div>
       <div className="card">
       <img src="https://img.freepik.com/premium-photo/shopping-cart-emitting-from-laptop-shopping-concept_932772-4177.jpg" alt="Item Image" className="card-img"/>
   
           <div className="card-content">
               <h3 className="item-name">Item Name</h3>
               <p className="item-description">This is a brief description of the item. It gives more context about the product.</p>
               <div className="pricing">
                   <span className="original-price">$50.00</span>
                   <span className="offer-price">$30.00</span>
               </div>
           </div>
       </div>
       <div className="card">
       <img src="https://img.freepik.com/premium-photo/shopping-cart-emitting-from-laptop-shopping-concept_932772-4177.jpg" alt="Item Image" className="card-img"/>
   
           <div className="card-content">
               <h3 className="item-name">Item Name</h3>
               <p className="item-description">This is a brief description of the item. It gives more context about the product.</p>
               <div className="pricing">
                   <span className="original-price">$50.00</span>
                   <span className="offer-price">$30.00</span>
               </div>
           </div>
       </div>
           </div>
          
         
             
            </>
       
        
    )
}

export default Home