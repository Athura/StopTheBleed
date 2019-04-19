import React from 'react';

import { Wrapper, Half, Image, Padding, Header, Paragraph } from '../../../styles/component/hero';
import  doctor from '../../../styles/images/doctor.svg';
import { Button } from '../../../styles/common/button';

const Hero = () => {
  return (
    <>
      <Wrapper>
        <Half left>
          <Padding>
            <Header>Get the training you need to Stop The Bleed.</Header>
            <Paragraph>
              Hey, we are Stop The Bleed, a group of individuals teaching other
              individuals how to become trained, equipped, and empowered to help
              in a bleeding emergency before professional help arrives.
            </Paragraph>
            <Button getstarted border>Get Started</Button>
          </Padding>
        </Half>
        <Half right>
          <Image src={doctor} alt="Doctor" />
        </Half>
      </Wrapper>
    </>
  );
};

export default Hero;
