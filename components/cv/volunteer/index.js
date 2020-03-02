import React from "react";
import {
  GridItem,
  Headline,
  Subheadline,
  Note,
  Content,
  Details
} from "../styles";

const VolunteerExperience = ({ title, content }) => {
  return (
    <React.Fragment>
      <GridItem start="1" span="12">
        <Headline as="h2">{title}</Headline>
      </GridItem>

      {content.map(
        ({ organisation, role, linktointro, linkto, contributions }, i) => {
          return (
            <React.Fragment key={i}>
              <GridItem start="1" span="12">
                <Subheadline as="p">
                  <strong>
                    {organisation} | {role}
                  </strong>
                </Subheadline>
              </GridItem>
              <GridItem start="1" span="12" style={{ marginTop: -30 }}>
                <Note>
                  <em>{linktointro}</em> <a href={linkto}>{linkto}</a>
                </Note>
              </GridItem>
              {contributions.map(({ contribution, details }, i) => {
                return (
                  <React.Fragment key={i}>
                    <GridItem start="1" span="12" style={{ marginTop: -20 }}>
                      <Content as="h3" style={{ gridColumn: "1 / span 12" }}>
                        {contribution}
                      </Content>
                    </GridItem>

                    <GridItem
                      as="div"
                      start="1"
                      span="12"
                      style={{ marginTop: -40 }}
                    >
                      {details.map(({ detail }, i) => (
                        <Details
                          as="p"
                          key={i}
                          style={{ marginTop: 10, marginBottom: 10 }}
                        >
                          {detail}
                        </Details>
                      ))}
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

export default VolunteerExperience;
