import React from 'react';
import Skills from '../skills';
import {headline} from '../styles';

const SoftSkills = ({title, content}) => {
    return (
      <React.Fragment>
        <h2 style={headline}>{title}</h2>
        <Skills content={content} type="soft"/>
      </React.Fragment>
    )
}

export default SoftSkills;