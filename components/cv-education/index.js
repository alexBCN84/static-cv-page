import React from 'react';

const Education = ({title, content}) => {
    return (
      <section>
        <h2>{title}</h2>
        {content.map(({title, provider, location, year}, i) => {
          return (
          <React.Fragment key={i}>
            <p><strong>{title} | </strong>{provider}</p>
            <p>{location} |  {year}</p>
          </React.Fragment> 
          )
        })}
      </section>
    )
}

export default Education;