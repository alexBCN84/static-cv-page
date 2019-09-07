import React from 'react';
import {headline, subheadline, note, content as contributionText, details as volunteerDetails} from '../styles';

const VolunteerExperience = ({title,content}) => {
    return (
        <React.Fragment>
        <h2 style={headline}>{title}</h2>
        {content.map(({organisation, role, linktointro, linkto, contributions}, i) => {
          return (
          <React.Fragment key={i}>
            <p style={{...subheadline, gridColumn: '1 / span 6'}}><strong>{organisation} | {role}</strong></p>
              <p style={note}><em>{linktointro}</em> <a href={linkto}>{linkto}</a></p>
              {contributions.map(({contribution, details}, i) => {
                return (
                <React.Fragment key={i}>
                  <h3 style={{...contributionText, gridColumn: '1 / span 12'}}>{contribution}</h3>
                  <ul>
                  {details.map(({detail}, i) => <li style={{...volunteerDetails, gridColumn: '1 / span 12', marginTop: 0, marginBottom: -5, lineHeight: 1.4}} key={i}>{detail}</li>)}
                  </ul>
                </React.Fragment>    
                )
              })}
          </React.Fragment> 
          )
        })}
      </React.Fragment>
    )
}

export default VolunteerExperience;