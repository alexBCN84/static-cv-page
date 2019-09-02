import React from 'react';

const ProfessionalExperience = ({title, content}) => {
    return (
        <section>
        <h2>{title}</h2>
        {content.map(({company, title, skills, place, dates, contributions}, i) => {
          return (
          <React.Fragment key={i}>
            <p>{company}</p>
              <p>{title}</p>
              <p>{skills}</p>
              <p>{place}</p>
              <p>{dates}</p>
              {contributions.map(({contribution, details}, i) => {
                return (
                <React.Fragment key={i}>
                  <h3>{contribution}</h3>
                  <ul>
                  {details.map(({detail}, i) => <li key={i}>{detail}</li>)}
                  </ul>
                </React.Fragment>    
                )
              })}
          </React.Fragment> 
          )
        })}
      </section>
    )
}

export default ProfessionalExperience;