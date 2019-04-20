import React from 'react';

import Hero from './Hero/Hero';
import WhoWeAre from './WhoWeAre/WhoWeAre';
import { Circle } from '../../styles/common/shape';

const Landing = () => {
    return (
        <>
            <Hero />
            <Circle small/>
            <WhoWeAre />
        </>
    )
}

export default Landing;