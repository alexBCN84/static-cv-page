import content from '../content/cv.md';
import _ProfessionalExperience from '../components/cv/experience';
import _VolunteerExperience from '../components/cv/volunteer';
import _PersonalDetails from '../components/cv/personal-details';
import _Summary from '../components/cv/summary';
import _KeySkills from '../components/cv/key-skills';
import _SoftSkills from '../components/cv/soft-skills';
import _Trainings from '../components/cv/trainings';
import _Education from '../components/cv/education';
import _Languages from '../components/cv/key-skills/cv-languages';
import withSection from '../components/HOC/Section';


const { html, attributes: {name, title, email, linkedin, github, address, experience, keySkills, softSkills, volunteer, trainings, education, languages}} = content
const personalDetails = {name, title, email, linkedin, github, address};

const css = {
  article: {
    backgroundColor: 'yellow',
    display: 'grid',
    gridTemplateColumns: '49% 49%',
    gridGap: '1%'
  }
}


const PersonalDetails = withSection(_PersonalDetails)({backgroundColor: 'red'});
const Summary = withSection(_Summary)({backgroundColor: 'blue'});
const KeySkills = withSection(_KeySkills)({backgroundColor: 'green'});
const SoftSkills = withSection(_SoftSkills)({backgroundColor: 'pink'});
const ProfessionalExperience = withSection(_ProfessionalExperience)({backgroundColor: 'orange'});
const VolunteerExperience = withSection(_VolunteerExperience)({backgroundColor: 'grey'});
const Trainings = withSection(_Trainings)({backgroundColor: 'white'});
const Education = withSection(_Education)({backgroundColor: 'crimson'});
const Languages = withSection(_Languages)({backgroundColor: 'coral'});

export default function Cv(){
  return (
      <article style={css.article}>
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
  )
}