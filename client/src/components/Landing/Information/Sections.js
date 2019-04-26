import React from 'react';
import { Wrapper, Half, Image, Header, Paragraph, Background } from '../../../styles/component/information';
import Roll from 'react-reveal/Roll';
import Fade from 'react-reveal/Fade';

const Section = ({ info }) => (
    <>
        {info.map(i => (
            <Wrapper key={i.key}>
                <Half left>
                <Roll left opposite >
                    <Header>{i.title}</Header>
                    <Paragraph>{i.body}</Paragraph>
                    <a href={i.link}>Learn More</a>
                    </Roll>
                </Half>
                <Half right>
                    <Fade bottom delay={1200}>
                        <Image src={i.src} alt={i.alt} />
                    </Fade>
                </Half>
            </Wrapper>
        ))}
    </>
)

export default Section;