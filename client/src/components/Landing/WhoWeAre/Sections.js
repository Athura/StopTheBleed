import React from 'react';
import { SectionCard, Header, Paragraph } from '../../../styles/component/whoweare';

const Sections = ({ section }) => (
    <>
        {section.map(s => (
                <SectionCard key={s.key}>
                    <Header>{s.title}</Header>
                    <small>{s.example}</small>
                    <Paragraph>{s.body}</Paragraph>
                </SectionCard>
        ))}
    </>
)

export default Sections;