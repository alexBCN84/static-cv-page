import content from "../content/cv.md";
import _ProfessionalExperience from "../components/cv/experience";
import _VolunteerExperience from "../components/cv/volunteer";
import _PersonalDetails from "../components/cv/personal-details";
import _Summary from "../components/cv/summary";
import _Education from "../components/cv/education";
import _Languages from "../components/cv/cv-languages";
import withSection from "../components/HOC/Section";
import { ViewContainer as CvContainer } from "../components/cv/styles";
import _Publications from "../components/cv/publications";
import _Projects from "../components/cv/projects";

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
    volunteer,
    education,
    languages,
    summary,
    publications,
    projects
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
  const ProfessionalExperience = withSection(_ProfessionalExperience)(
    "professionalExperience"
  );
  const VolunteerExperience = withSection(_VolunteerExperience)(
    "volunteerExperience"
  );
  const Education = withSection(_Education)("education");
  const Languages = withSection(_Languages)("languages");
  const Publications = withSection(_Publications)("publications");
  const Projects = withSection(_Projects)("projects");
  return (
    <CvContainer>
      <PersonalDetails {...personalDetails} />
      <Summary content={summary} />
      <ProfessionalExperience
        title="EXPERIENCE"
        content={experience}
      />
      <Publications title="PUBLICATIONS" content={publications} />
      <Projects title="PERSONAL PROJECTS" content={projects} />
      <VolunteerExperience
        title="VOLUNTEER EXPERIENCE"
        content={volunteer}
        id="target"
      />
      <Education title="EDUCATION" content={education} />
      <Languages title="LANGUAGES" content={languages} />
    </CvContainer>
  );
}
