import React from "react";
import { GridItem, Headline, Content, colors } from "../styles";

const Languages = ({ title, content }) => {
  return (
    <React.Fragment>
      <GridItem start="1" span="12">
        <Headline as="h2">{title}</Headline>
      </GridItem>
      <GridItem start="1" span="12" style={{ marginTop: -30 }}>
        <Content as="div" style={{marginLeft: "5%"}}>
          {
          content.map(
          (language, i) => {
            language = language[`l${i + 1}`].split(',')
          return <p style={{listStyleType: 'circle'}} key={i}>{language[0]} <span style={{color: colors.redish}}> => </span> {language[1]}</p>
          }
            )
          }
        </Content>
      </GridItem>
    </React.Fragment>
  );
};

export default Languages;
