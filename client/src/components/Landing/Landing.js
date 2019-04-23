import React from 'react';

import Hero from './Hero/Hero';
import WhoWeAre from './WhoWeAre/WhoWeAre';
import Timeline from '../Timeline/Timeline';
import { Circle } from '../../styles/common/shape';

const Landing = () => {
    return (
        <>
            <Hero />
            <Circle small/>
            <WhoWeAre />
            <Timeline />
        </>
    )
}

export default Landing;