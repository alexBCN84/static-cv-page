import React from 'react';

const KeySkills = ({title, content}) => {
    return (
      <section>
        <h2>{title}</h2>
        <ul>
        {content.map(({skill}, i) => {
          return (
          <React.Fragment key={i}>
            <li>{skill}</li>
          </React.Fragment> 
          )
        })}
        </ul>
      </section>
    )
}

export default KeySkills;