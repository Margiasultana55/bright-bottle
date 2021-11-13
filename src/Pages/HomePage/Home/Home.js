import React from 'react';

import Banner from '../Banner/Banner';
import Delivery from '../Delivery/Delivery';
import ReviewHome from '../ReviewHome/ReviewHome';
import ServiceHome from '../ServiceHome/ServiceHome';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <ServiceHome></ServiceHome>
            <Delivery></Delivery>
            <ReviewHome></ReviewHome>

        </div>
    );
};

export default Home;