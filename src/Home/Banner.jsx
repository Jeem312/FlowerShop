import React from 'react';
import img from '../Flower Asset/pngwing 10.png';
import banner from '../Styles/Banner.css'
const Banner = () => {
    return (
       <div className='containerColor'>
         <div className='flexBox'>
           <div className='textbox'>
            <h1 id='banner-tittle'>Let's make beautiful flowers a part of your life.</h1>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
            <button className='button'>Shop Now</button>
            </div> 
            <div>
  <img src={img} alt="" />
            </div>
        </div>
       </div>
    );
};

export default Banner;