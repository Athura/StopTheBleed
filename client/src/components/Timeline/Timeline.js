import React from 'react';
import TimelineItem from './TimelineItem';
import '../../styles/component/timeline.css';

const data = [
    {
        key: '0',
        title: 'Determine',
        body: 'Determine if an area is safe for you to proceed toward a victim to provide assistance'
    },
    {
        key: '1',
        title: 'Identify',
        body: 'Identify any nearby tools to assist you such as a publicly placed bleeding control kit or everyday items that can be used to control bleeding'
    },
    {
        key: '2',
        title: 'Pressure',
        body: 'Use your hands to apply direct pressure at the site of the wound to stop bleeding'
    },
    {
        key: '3',
        title: 'Control',
        body: 'Pack a deep wound with cloth or gauze to control bleeding'
    },
    {
        key: '4',
        title: 'Stop',
        body: 'Correctly apply a tourniquet to an injured limb to stop bleeding'
    },
    {
        key: '5',
        title: 'Calm',
        body: 'Keep the victim calm until help arrives'
    }
];

const Timeline = () =>
    data.length > 0 && (
        <div className = "timeline-container">
            {data.map((data) => (
                <TimelineItem data={data} key={data.key} />
            ))}
        </div>
    )

    export default Timeline;