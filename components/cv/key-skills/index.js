import React from "react";
import { GridItem, Headline } from "../styles";
import Skills from "../skills";

const KeySkills = ({ title, content }) => {
  return (
    <GridItem start="1" span="12">
      <Headline as="h2">{title}</Headline>
      <Skills content={content} type="key" />
    </GridItem>
  );
};

export default KeySkills;
