import React from 'react';
import {grid, details, colors, subheadline} from '../styles';


const styles = {
  header: {
    gridColumn: "1 / span 12",
    gridRow: '1'
  },
  heading: {
    fontSize: 30,
    fontFamily: '"Lucida Sans Unicode", "Lucida Grande", sans-serif',
    fontWeight: 900,
    margin: '0px auto',
    color: colors.black


  }
}


const PersonalDetails = ({name, title, email, phone, linkedin, github, address}) => {
    return (
      <section style={grid}>
        <div style={styles.header}>
          <h1 style={styles.heading}>{name}</h1>
          <h2 style={subheadline}>{title}</h2>
        </div>
        <div style={{gridColumn: '1 / span 5'}}>
          <h3 style={details}>{email}</h3>
          <h3 style={details}>{phone}</h3>
        </div>
        <div style={{gridColumn: '6 / span 4'}}>
          <h3 style={{...details, textAlign: 'center'}}>{linkedin}</h3>
          <h3 style={{...details, textAlign: 'center'}}>{github}</h3>
        </div>
        <div style={{gridColumn: '10 / span 3'}}>
          <h3 style={{...details, textAlign: 'right'}}>{address}</h3>
        </div>
      </section>
    )
}

export default PersonalDetails;