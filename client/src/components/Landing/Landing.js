import React from 'react';

import Hero from './Hero/Hero';
import WhoWeAre from './WhoWeAre/WhoWeAre';
import WhoWeHelp from './WhoWeHelp/WhoWeHelp';
import { Circle } from '../../styles/common/shape';

const Landing = () => {
    return (
        <>
            <Hero />
            <Circle small/>
            <WhoWeAre />
            <WhoWeHelp />
        </>
    )
}

export default Landing;