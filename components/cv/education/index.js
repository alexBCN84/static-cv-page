import React from 'react';
import {headline, content as educationContent, details} from '../styles';

const Education = ({title, content}) => {
    return (
      <React.Fragment>
        <h2 style={headline}>{title}</h2>
        {content.map(({title, provider, location, year}, i) => {
          return (
          <React.Fragment key={i}>
            <p style={educationContent}><strong>{title} | </strong>{provider}</p>
            <p style={details}>{location} |  {year}</p>
          </React.Fragment> 
          )
        })}
      </React.Fragment>
    )
}

export default Education;