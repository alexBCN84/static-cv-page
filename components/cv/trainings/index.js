import React from "react";
import { GridItem, Headline, Content, Details } from "../styles";

const Trainings = ({ title, content }) => {
  return (
    <React.Fragment>
      <GridItem start="1" span="12">
        <Headline as="h2">{title}</Headline>
      </GridItem>

      {content.map(
        ({ trainingProvider, trainingCourse, location, dates }, i) => {
          return (
            <React.Fragment key={i}>
              <GridItem start="1" span="12">
                <Content as="p">
                  <strong>{trainingProvider} | </strong>
                  {trainingCourse}
                </Content>
              </GridItem>
              <GridItem start="1" span="12" style={{ marginTop: -30 }}>
                <Details as="p">
                  {location} | {dates}
                </Details>
              </GridItem>
            </React.Fragment>
          );
        }
      )}
    </React.Fragment>
  );
};

export default Trainings;
