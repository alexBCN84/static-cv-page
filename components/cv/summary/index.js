import React from 'react';
import {headline, content as contentStyles} from '../styles';

const Summary = ({title, content}) => {
    return (
      <React.Fragment>
        <h2 style={headline}>{title}</h2>
        <div style={contentStyles} dangerouslySetInnerHTML={content}/>
      </React.Fragment>
    )
}

export default Summary