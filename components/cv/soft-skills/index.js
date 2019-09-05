import React from 'react';

const SoftSkills = ({title, content}) => {
    return (
      <section>
        <h2>{title}</h2>
        <ul>
        {content.map(({heading, subheading}, i) => {
          return (
            <li key={i}><strong>{heading}: </strong>{subheading}</li>
          )
        })}
        </ul>
      </section>
    )
}

export default SoftSkills;