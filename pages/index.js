import styled, { css } from "styled-components";

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

const {
  html,
  attributes: {
    name,
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
    languages
  }
} = content;

const personalDetails = {
  name,
  title,
  email,
  phone,
  linkedin,
  github,
  address
};

const article = {
  display: "grid",
  gridGap: "20px",
  padding: "60px",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  maxWidth: 1200,
  margin: "auto"
};

const PersonalDetails = withSection(_PersonalDetails)({ padding: 10 });
const Summary = withSection(_Summary)({ padding: 10 });
const KeySkills = withSection(_KeySkills)({ padding: 10 });
const SoftSkills = withSection(_SoftSkills)({ padding: 10 });
const ProfessionalExperience = withSection(_ProfessionalExperience)({
  padding: 10,
  marginBottom: -60
});
const VolunteerExperience = withSection(_VolunteerExperience)({ padding: 10 });
const Trainings = withSection(_Trainings)({ padding: 10 });
const Education = withSection(_Education)({ padding: 10 });
const Languages = withSection(_Languages)({ padding: 10 });

export default function Cv() {
  return (
    <article style={article}>
      <Container>
        <Button>Normal Button</Button>
        <Button primary>Primary Button</Button>
        <TomatoButton>Tomato Button</TomatoButton>
        {/*// In some cases you might want to change which tag or component a styled component renders.
        // You can use the "as" polymorphic prop to dynamically swap out the element that receives the styles you wrote:
         */}
        <Button as="a" href="/">
          Link with Button styles
        </Button>
        <TomatoButton as="a" href="/">
          Link with Tomato Button styles
        </TomatoButton>
      </Container>
      <PersonalDetails {...personalDetails} />
      <Summary title="SUMMARY" content={{ __html: html }} />
      <KeySkills title="KEY SKILLS" content={keySkills} />
      <SoftSkills title="SOFT SKILLS" content={softSkills} />
      <ProfessionalExperience
        title="PROFESSIONAL EXPERIENCE IN TECH"
        content={experience}
      />
      <VolunteerExperience title="VOLUNTEER EXPERIENCE" content={volunteer} />
      <Trainings
        title="BOOTCAMPS, WORKSHOPS AND TRAINING EVENTS"
        content={trainings}
      />
      <Education title="EDUCATION" content={education} />
      <Languages title="LANGUAGES" content={languages} />
    </article>
  );
}

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
`;

// create a new component from another one by override styles
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

const Container = styled.div`
  text-align: center;
`;
