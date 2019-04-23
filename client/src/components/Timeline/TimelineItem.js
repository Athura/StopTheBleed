import React from 'react';

import '../../styles/component/timeline.css';

const TimelineItem = ({ data }) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <h1>{data.title}</h1>
            <p>{data.body}</p>
            <div className="circle" />
        </div>
    </div>
)

export default TimelineItem;