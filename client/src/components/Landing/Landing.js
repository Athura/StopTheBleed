import React from 'react';

import Hero from './Hero/Hero';
import WhoWeAre from './WhoWeAre/WhoWeAre';
import WhoWeHelp from './WhoWeHelp/WhoWeHelp';
import Information from './Information/Information';
import { Circle } from '../../styles/common/shape';

const Landing = () => {
    return (
        <>
            <Hero />
            <Circle small/>
            <WhoWeAre />
            <WhoWeHelp />
            <Information />
        </>
    )
}

export default Landing;