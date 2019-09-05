import React from 'react';

const Summary = ({title, content}) => {
    return (
      <section>
        <h2>{title}</h2>
        <div dangerouslySetInnerHTML={content}/>
      </section>
    )
}

export default Summary