import React from "react";
import Skills from "../skills";
import { Headline, GridItem } from "../styles";

const SoftSkills = ({ title, content }) => {
  return (
    <GridItem start="1" span="12">
      <Headline as="h2">{title}</Headline>
      <Skills content={content} type="soft" />
    </GridItem>
  );
};

export default SoftSkills;
