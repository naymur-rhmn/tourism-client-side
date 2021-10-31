import React from 'react';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
import Explore from '../Explore/Explore';
import Guides from '../Guides/Guides';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Explore></Explore>
            <Guides></Guides>
        </div>
    );
};

export default Home;