import content from "../content/cv.md";
import _ProfessionalExperience from "../components/cv/experience";
import _VolunteerExperience from "../components/cv/volunteer";
import _PersonalDetails from "../components/cv/personal-details";
import _Summary from "../components/cv/summary";
import _KeySkills from "../components/cv/key-skills";
import _SoftSkills from "../components/cv/soft-skills";
import _Trainings from "../components/cv/trainings";
import _Education from "../components/cv/education";
import _Languages from "../components/cv/cv-languages";
import withSection from "../components/HOC/Section";
import { ViewContainer as CvContainer } from "../components/cv/styles";
import _Publications from "../components/cv/publications";

const {
  attributes: {
    name,
    avatar,
    title,
    email,
    phone,
    linkedin,
    github,
    address,
    experience,
    keySkills,
    softSkills,
    volunteer,
    trainings,
    education,
    languages,
    summary,
    publications
  }
} = content;

const personalDetails = {
  name,
  avatar,
  title,
  email,
  phone,
  linkedin,
  github,
  address
};

export default function Cv() {
  const PersonalDetails = withSection(_PersonalDetails)("personalDetails");
  const Summary = withSection(_Summary)("summary");
  const KeySkills = withSection(_KeySkills)("keySkills");
  const SoftSkills = withSection(_SoftSkills)("softSkills");
  const ProfessionalExperience = withSection(_ProfessionalExperience)(
    "professionalExperience"
  );
  const VolunteerExperience = withSection(_VolunteerExperience)(
    "volunteerExperience"
  );
  const Trainings = withSection(_Trainings)("trainings");
  const Education = withSection(_Education)("education");
  const Languages = withSection(_Languages)("languages");
  const Publications = withSection(_Publications)("publications");
  return (
    <CvContainer>
      <PersonalDetails {...personalDetails} />
      <Summary title="SUMMARY" content={summary} />
      <KeySkills title="KEY SKILLS" content={keySkills} />
      <SoftSkills title="SOFT SKILLS" content={softSkills} />
      <ProfessionalExperience
        title="PROFESSIONAL EXPERIENCE IN TECH"
        content={experience}
      />
      <Publications title="PUBLICATIONS" content={publications} />
      <VolunteerExperience
        title="VOLUNTEER EXPERIENCE"
        content={volunteer}
        id="target"
      />
      <Trainings
        title="BOOTCAMPS, WORKSHOPS AND TRAINING EVENTS"
        content={trainings}
      />
      <Education title="EDUCATION" content={education} />
      <Languages title="LANGUAGES" content={languages} />
    </CvContainer>
  );
}
