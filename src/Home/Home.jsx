import React from 'react';
import Banner from './Banner';
import Features from './Features';

import Service from './Service';
import HotDeal from './HotDeal';
import Instragram from './Instragram';
import SubscribeBox from './SubscribeBox';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Features/>
         <Service/>
         <HotDeal/>
         <Instragram/>
         <SubscribeBox></SubscribeBox>
         <Footer/>
        </div>
    );
};

export default Home;