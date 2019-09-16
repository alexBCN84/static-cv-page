import React from "react";
import { GridItem, Headline, Subheadline, Details, Content } from "../styles";

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
                  {company} | {title}
                </Subheadline>
              </GridItem>
              <GridItem xs-start="1" xs-span="12" start="7" span="6">
                <Details xs-align="left" align="right">
                  {dates} | {place}
                </Details>
              </GridItem>
              <GridItem start="1" span="12" style={{ marginTop: -30 }}>
                <Details as="p">{skills}</Details>
              </GridItem>
              {contributions.map(({ contribution, details }, i) => {
                return (
                  <React.Fragment key={i}>
                    <GridItem start="1" span="12" style={{ marginTop: -20 }}>
                      <Content as="h3">{contribution}</Content>
                    </GridItem>
                    <GridItem
                      as="ul"
                      start="1"
                      span="12"
                      style={{ marginTop: -40 }}
                    >
                      {details.map(({ detail }, i) => {
                        return (
                          <Details
                            as="li"
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
            </React.Fragment>
          );
        }
      )}
    </React.Fragment>
  );
};

export default ProfessionalExperience;
