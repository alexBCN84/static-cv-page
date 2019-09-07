import React from 'react';
import {headline} from '../styles';
import Skills from '../skills';

const KeySkills = ({title, content}) => {
    return (
      <React.Fragment>
        <h2 style={headline}>{title}</h2>
        <Skills content={content} type="key"/>
      </React.Fragment>
    )
}

export default KeySkills;