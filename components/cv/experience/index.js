import React from 'react';
import {grid, headline, subheadline, details as jobDetails, content as contributionText} from '../styles';

const ProfessionalExperience = ({title, content}) => {
    return (
      <section style={grid}>
        <h2 style={{...headline, gridColumn: '1 / span 12'}}>{title}</h2>
        {content.map(({company, title, skills, place, dates, contributions}, i) => {
          return (
          <section style={{gridColumn: '1 / span 12', marginBottom: 60}} key={i}>
            <div style={grid}>
              <p style={{...subheadline, gridColumn: '1 / span 6'}}>{company} | {title}</p>
              <p style={{...jobDetails, gridColumn: '7 / span 6', textAlign: 'right'}}>{dates} | {place}</p>
              <p style={{...jobDetails, gridColumn: '1 / span 12', marginTop: -20}}>{skills}</p>
              {contributions.map(({contribution, details}, i) => {
                  return (
                  <div style={{gridColumn: '1/ span 12'}} key={i}>
                    <h3 style={{...contributionText, gridColumn: '1 / span 12'}}>{contribution}</h3>
                    <ul style={grid}>
                    {details.map(({detail}, i) => <li style={{...jobDetails, gridColumn: '1 / span 12', marginTop: 0, marginBottom: -10, lineHeight: 1.4}} key={i}>{detail}</li>)}
                    </ul>
                  </div>    
                  )
                })}
              </div>
          </section> 
          )
        })}
      </section>
    )
}

export default ProfessionalExperience;