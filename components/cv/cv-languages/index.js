import React from "react";
import { GridItem, Headline, Content, colors } from "../styles";

const Languages = ({ title, content }) => {
  console.log(content.map(language => language.l1));
  return (
    <React.Fragment>
      <GridItem start="1" span="12">
        <Headline as="h2">{title}</Headline>
      </GridItem>
      <GridItem start="1" span="12" style={{ marginTop: -30 }}>
        <Content as="ul">
          {
          content.map(
          (language, i) => {
            language = language[`l${i + 1}`].split(',')
          return <li style={{listStyleType: 'circle'}} key={i}>{language[0]} <span style={{color: colors.redish}}> => </span> {language[1]}</li>
          }
            )
          }
        </Content>
      </GridItem>
    </React.Fragment>
  );
};

export default Languages;
