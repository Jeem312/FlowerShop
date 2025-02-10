import React from 'react';
import "../Styles/HotDeal.css"
const HotDeal = () => {
    return (
        <div className='HotLDeal'>
          <div className='container'>
           <div className='contentDiv'>
             {/* TextDiv */}
             <div className='text-div'>
             <h1 className='tittle'>Hot Deal ! Sale Up To 25% <span>Off</span>.</h1>
                  <p className=''>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                  <button className='button'>Shop Now</button>
                </div>
            {/* Image Div */}
               <div className='image-div'>
                   <img src="../Flower Asset/pngwing 8.png" alt="" />
               </div>
           </div>
            </div>  
        </div>
    );
};

export default HotDeal;