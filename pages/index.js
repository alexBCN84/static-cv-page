import content from '../content/cv.md';
import {Grid, Row, Col} from 'react-grid-lib';
import ProfessionalExperience from '../components/cv-experience';
import VolunteerExperience from '../components/cv-volunteer';
import PersonalDetails from '../components/cv-personal-details';
import Summary from '../components/cv-summary';
import KeySkills from '../components/cv-key-skills';
import SoftSkills from '../components/cv-soft-skills';
import Trainings from '../components/cv-trainings';
import Education from '../components/cv-education';
import Languages from '../components/cv-languages';

const { html, attributes: {name, title, email, linkedin, github, address, experience, keySkills, softSkills, volunteer, trainings, education, languages}} = content
const personalDetails = {name, title, email, linkedin, github, address};

export default function Cv(){
  return (
    <Grid maxWidth={1400} gutters={20}>
      <article>
        <PersonalDetails {...personalDetails} />
        <Summary title="SUMMARY" content={{ __html: html }} />
        <KeySkills title="KEY SKILLS" content={keySkills} />
        <SoftSkills title="SOFT SKILLS" content={softSkills} />
        <ProfessionalExperience title="PROFESSIONAL EXPERIENCE IN TECH" content={experience} />
        <VolunteerExperience title="VOLUNTEER EXPERIENCE" content={volunteer} />
        <Trainings title="BOOTCAMPS, WORKSHOPS AND TRAINING EVENTS" content={trainings} />
        <Education title="EDUCATION" content={education} />
        <Languages title = "LANGUAGES" content={languages} />
      </article>  
    </Grid>
  )
}