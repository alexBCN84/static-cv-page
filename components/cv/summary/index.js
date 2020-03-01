import React from "react";
import { GridItem, Headline, Content } from "../styles";

const Summary = ({ title, content }) => {
  return (
    <GridItem start="1" span="12">
      <Headline as="h2">{title}</Headline>
  <Content as="ul">
    {
      content.map((item, i) => {
        return <li key={i}>
          {item}
        </li>
      })
  }
  </Content>
    </GridItem>
  );
};

export default Summary;
