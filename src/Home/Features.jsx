import React from 'react';
import '../Styles/Features.css'
const Features = () => {
    return (
        <div className='Features'>
       <div className='container'>
       <div className='Text-div'>
           <h2 className='heading'>Our Featured Flowers</h2>
           <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
           </div>
           <div className='flower-div'>
          <div className='flowers'>
          <div className='flowerContainer-1'>
                <div>
                    <img src="../Flower Asset/pngwing 6.png" alt="" />
                </div>
             
            </div>
            <p> Pink Flower Tree </p>
          </div>
           <div className="flowers">
           <div className='flowerContainer-2'>
                <div>
                    <img src="../Flower Asset/pngwing 5.png" alt="" />
                </div>
        
            </div>
            
                <p> Red Flower Tree </p>
            
           </div>
          <div className='flowers'>
          <div className='flowerContainer-3'>
                <div>
                    <img src="../Flower Asset/pngwing 7.png" alt="" />
                </div>
                <p> Yellow Flower Tree </p>
            </div>
          </div>
           </div>
       </div>
        </div>
    );
};

export default Features;