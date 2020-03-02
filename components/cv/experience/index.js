import React from "react";
import { GridItem, Headline, Subheadline, Details, Content } from "../styles";
import { Html5, Css3, Js, Angular, ReactJS, NodeJS, TypeScript, GraphQL, JQuery, PHP, NextJS, Sass, StyledComponents } from "../../../content/icons";
import { colors, Divider } from "../styles";
const techIconsMap = {
  html: <Html5 />,
  css: <Css3 />,
  javascript: <Js />,
  angular: <Angular />,
  react: <ReactJS />,
  nodejs: <NodeJS />,
  typescript: <TypeScript />,
  graphql: <GraphQL />,
  jquery: <JQuery />,
  php: <PHP />,
  nextjs: <NextJS />,
  sass: <Sass />,
  styledcomponents: <StyledComponents />
}
const ProfessionalExperience = ({ title, content }) => {
  return (
    <React.Fragment>
      <GridItem start="1" span="12">
        <Headline as="h2">{title}</Headline>
      </GridItem>
      {content.map(
        ({ company, title, skills, place, dates, contributions }, i) => {
          return (
            <React.Fragment key={i}>
              <GridItem xs-start="1" xs-span="12" start="1" span="6">
                <Subheadline as="p">
                  {company} <span style={{color: colors.redish}}>|</span> {title}
                </Subheadline>
              </GridItem>
              <GridItem xs-start="1" xs-span="12" start="7" span="6">
                <Details xs-align="left" align="right" style={{color: colors.greyBlue}}>
                  {dates} | {place}
                </Details>
              </GridItem>
              <GridItem start="1" span="12">
                <Details as="p">{
                  skills.toLowerCase().split(', ').map((skill, i) => <span key={i} >{techIconsMap[skill] || skill}</span>)
                }</Details>
              </GridItem>
              {contributions.map(({ contribution, details }, i) => {
                return (
                  <React.Fragment key={i}>
                    <GridItem start="1" span="12" style={{ marginTop: -20 }}>
                      <Content as="h3">{contribution}</Content>
                    </GridItem>
                    <GridItem
                      as="div"
                      start="1"
                      span="12"
                      style={{ marginTop: -40 }}
                    >
                      {details.map(({ detail }, i) => {
                        return (
                          <Details
                            as="p"
                            key={i}
                            style={{ marginTop: 10, marginBottom: 10 }}
                          >
                            {detail}
                          </Details>
                        );
                      })}
                    </GridItem>
                  </React.Fragment>
                );
              })}
              {i !== content.length - 1 && <Divider style={{width: "50px"}}/>}
            </React.Fragment>
          );
        }
      )}
    </React.Fragment>
  );
};

export default ProfessionalExperience;
