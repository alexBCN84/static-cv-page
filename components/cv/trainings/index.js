import React from 'react';
import {headline, content as trainingContent, details} from '../styles';

const Trainings = ({title, content}) => {
    return (
      <section>
        <h2 style={headline}>{title}</h2>
        {content.map(({trainingProvider, trainingCourse, location, dates}, i) => {
          return (
          <React.Fragment key={i}>
            <p style={trainingContent}><strong>{trainingProvider} | </strong>{trainingCourse}</p>
            <p style={details}>{location} |  {dates}</p>
          </React.Fragment> 
          )
        })}
      </section>
    )
}

export default Trainings;