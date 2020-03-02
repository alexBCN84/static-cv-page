import React from "react";
import { GridItem, Content, Divider } from "../styles";

const Summary = ({ content }) => {
  return (
    <GridItem start="1" span="12" sm-start="2" sm-span="10">
      <Content as="div">
        {
          content.map((item, i) => {
            return <p key={i} style={{textAlign: "center"}}>
              {item}
            </p>
          })
      }
      </Content>
        <Divider style={{width: "50px"}}/>
    </GridItem>
  );
};

export default Summary;
