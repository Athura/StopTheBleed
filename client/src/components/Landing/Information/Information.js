import React from 'react';

import { Header } from '../../../styles/component/information';
import Sections from './Sections';

import complete from '../../../styles/images/undraw_completed_ngx6.svg';
import medicine from '../../../styles/images/undraw_medicine_b1ol.svg';
import teacher from '../../../styles/images/undraw_teacher_35j2.svg';
import support from '../../../styles/images/undraw_air_support_wy1q.svg';

const info = [
    {
        key: '1',
        title: 'Education',
        body: 'To develop a collaborative community of like minded people and organizations to help train and equip the nation',
        src: teacher,
        alt: 'teacher',
        link: '#'
    },
    {
        key: '2',
        title: 'Support',
        body: 'Stop the Bleeding Coalition is focused on raising awareness of how, with the proper training and materials, death from bleeding can be prevented. Simple measures can save many lives.',
        src: support,
        alt: 'support',
        link: '#'
    },
    {
        key: '3',
        title: 'Medicine',
        body: 'Purchase Bleeding Control Products for direct delivery. Rally your community by organizing a charity drive to get the products you need.',
        src: medicine,
        alt: 'medicine',
        link: '#'
    },
    {
        key: '4',
        title: 'Why It Matters',
        body: 'Uncontrolled bleeding is a major cause of preventable deaths. Approximately 40% of trauma-related deaths worldwide are due to bleeding or its consequences, establishing hemorrhage as the most common cause of preventable death in trauma.',
        src: complete,
        alt: 'complete',
        link: '#'
    }
]

const Information = () => {
    return (
        <>
            <Header>What We Do</Header>
            <Sections info={info} />
        </>
    )
}

export default Information;