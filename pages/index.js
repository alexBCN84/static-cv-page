import content from '../content/cv.md';
const { html, attributes: {name, title, email, linkedin, github, address, experience, keySkills, softSkills, volunteer, trainings, education, languages}} = content

export default function Cv(){
  return (
    <article>
      <section>
        <p>{name}</p>
        <p>{title}</p>
        <p>{email}</p>
        <p>{linkedin}</p>
        <p>{github}</p>
        <p>{address}</p>
      </section>
      <section>
        <h2>KEY SKILLS</h2>
        <ul>
        {keySkills.map(({skill}, i) => {
          return (
          <React.Fragment key={i}>
            <li>{skill}</li>
          </React.Fragment> 
          )
        })}
        </ul>
      </section>
      <section>
        <h2>SUMMARY</h2>
        <div dangerouslySetInnerHTML={{ __html: html }}/>
      </section>
      <section>
        <h2>SOFT SKILLS</h2>
        <ul>
        {softSkills.map(({heading, subheading}, i) => {
          return (
            <li key={i}><strong>{heading}: </strong>{subheading}</li>
          )
        })}
        </ul>
      </section>
      <section>
        <h2>PROFESSIONAL EXPERIENCE IN TECH</h2>
        {experience.map(({company, title, skills, place, dates, contributions}, i) => {
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
      <section>
        <h2>VOLUNTEER EXPERIENCE</h2>
        {volunteer.map(({organisation, role, linktointro, linkto, contributions}, i) => {
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
      <section>
        <h2>BOOTCAMPS, WORKSHOPS AND TRAINING EVENTS</h2>
        {trainings.map(({trainingProvider, trainingCourse, location, dates}, i) => {
          return (
          <React.Fragment key={i}>
            <p><strong>{trainingProvider} | </strong>{trainingCourse}</p>
            <p>{location} |  {dates}</p>
          </React.Fragment> 
          )
        })}
      </section>
      <section>
        <h2>EDUCATION</h2>
        {education.map(({title, provider, location, year}, i) => {
          return (
          <React.Fragment key={i}>
            <p><strong>{title} | </strong>{provider}</p>
            <p>{location} |  {year}</p>
          </React.Fragment> 
          )
        })}
      </section>
      <section>
        <h2>LANGUAGES</h2>
        <p>{languages}</p>
      </section>
    </article>
  )
}