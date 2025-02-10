import React from 'react';
import '../Styles/SubscribeBox.css'
const SubscribeBox = () => {
    return (
        <div className='container3'>
            <div>
                {/* Text div */}
                <div className='Text-div'>
        <h1>Get The Latest Deals</h1>
        <p>$30 coupon for first shopping</p>
                </div>
                {/* Input div */}
                <div className='inputDiv'>
                   <div> <input type="email" placeholder='Enter your email here....' /></div>
                    <div><button className='btn'>Subscribe</button></div>
                </div>
            </div>
            
        </div>
    );
};

export default SubscribeBox;