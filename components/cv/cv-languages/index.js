import React from 'react';
import {headline, content as languageContent} from '../styles';

const Languages = ({title, content}) => {
    return (
      <React.Fragment>
        <h2 style={headline}>{title}</h2>
        <p style={languageContent}>{content}</p>
      </React.Fragment>
    )
}

export default Languages;