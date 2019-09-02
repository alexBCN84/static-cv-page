import React from 'react';

const VolunteerExperience = ({title,content}) => {
    return (
        <section>
        <h2>{title}</h2>
        {content.map(({organisation, role, linktointro, linkto, contributions}, i) => {
          return (
          <React.Fragment key={i}>
            <p><strong>{organisation} | {role}</strong></p>
              <p><em>{linktointro}</em> <a href={linkto}>{linkto}</a></p>
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

export default VolunteerExperience;