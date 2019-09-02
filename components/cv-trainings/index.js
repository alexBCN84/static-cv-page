import React from 'react';

const Trainings = ({title, content}) => {
    return (
      <section>
        <h2>{title}</h2>
        {content.map(({trainingProvider, trainingCourse, location, dates}, i) => {
          return (
          <React.Fragment key={i}>
            <p><strong>{trainingProvider} | </strong>{trainingCourse}</p>
            <p>{location} |  {dates}</p>
          </React.Fragment> 
          )
        })}
      </section>
    )
}

export default Trainings;