import React from "react";
import { GridItem, Headline, Content } from "../styles";

const Languages = ({ title, content }) => {
  return (
    <React.Fragment>
      <GridItem start="1" span="12">
        <Headline as="h2">{title}</Headline>
      </GridItem>
      <GridItem start="1" span="12" style={{ marginTop: -30 }}>
        <Content as="p">{content}</Content>
      </GridItem>
    </React.Fragment>
  );
};

export default Languages;
