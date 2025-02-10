import React from 'react';
import '../Styles/Instragram.css'
const Instragram = () => {
    return (
        <div>
            <div className='container'>
                <div className='instragramDiv'>
                    {/* text-div */}
                    <div className='Text-div'>
                    <h2 className='heading'>Instagram</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                    {/* image div */}
                    <div className='instragramImage'>
                    
                    <div>
                        <img src="../Flower Asset/Flower 01.png" alt="" />
                    </div>
                    <div>
                        <img src="../Flower Asset/Rectangle 4.png" alt="" />
                    </div>
                    <div>
                        <img src="../Flower Asset/Rectangle 5.png" alt="" />
                    </div>
                    <div>
                        <img src="../Flower Asset/Rectangle 6.png" alt="" />
                    </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Instragram;