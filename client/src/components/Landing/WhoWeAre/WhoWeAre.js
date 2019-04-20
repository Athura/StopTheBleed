import React from 'react';

import { Container, SectionHeader } from '../../../styles/component/whoweare';
import Sections from './Sections';

const what = [
    {
        key: '1',
        title: 'Serious Bleeding',
        body: 'Serious or life-threatening bleeding will be red and continuously flowing. It may even be squirting.',
        example: 'Traffic accident, explosive device, and limb removal.'
    },
    {
        key: '2',
        title: 'Non-Serious Bleeding',
        body: 'Non-serious bleeding sometimes resolves on its own (it clots). Sometimes it requires some direct pressure.',
        example: 'Small paper cuts, cutting yourself when cooking, and using scissors.'
    },
    {
        key: '3',
        title: 'Internal Bleeding',
        body: 'Serious consequence of trauma. Bleeding inside the body, particularly in the chest cavity, belly cavity, or muscles.',
        example: 'Bleed from the ear, mouth, nose, anus, or other body opening that blood would normally not come out of.'
    }
]

const WhoWeAre = () => {
    return (
        <div className="container">
            <SectionHeader> Who We Are </SectionHeader>
            <Container>
                <Sections section={what} />
            </Container>
        </div>
    )
}

export default WhoWeAre;