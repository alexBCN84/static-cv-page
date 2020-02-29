import React from "react";
import {
  Avatar,
  Heading,
  GridItem,
  Details,
  JobTitle,
  Divider
} from "../styles";

import { Email, Phone, Github, Linkedin, Location } from "./contact";

const PersonalDetails = ({
  name,
  avatar,
  title,
  email,
  phone,
  linkedin,
  github,
  address
}) => {
  return (
    <React.Fragment>
      <GridItem start="1" span="12">
       <Avatar src={avatar}/>
      </GridItem>
      <GridItem start="1" span="12">
        <Heading>{name}</Heading>
        <JobTitle>{title}</JobTitle>
      </GridItem>
      <GridItem
        xs-start="1"
        xs-span="12"
        sm-start="6"
        sm-span="7"
        lg-start="1"
        lg-span="5"
      > 
        <Details as="h3" align="left" md-align="right">
          <Email email={email}/>
        </Details>
        <Details as="h3" align="left" md-align="right">
          <Phone phone={phone} />
        </Details>
      </GridItem>
      <GridItem
        xs-start="1"
        xs-span="12"
        sm-start="6"
        sm-span="7"
        lg-start="6"
        lg-span="2"
      >
      <Details align="center">
          <Location address={address}/>
        </Details>
      </GridItem>
      <GridItem
        xs-start="1"
        xs-span="12"
        sm-start="6"
        sm-span="7"
        lg-start="8"
        lg-span="5"
      >
        <Details as="h3" align="left" md-align="left" lg-align="left">
          <Linkedin linkedin={linkedin} />
        </Details>
        
        <Details as="h3" align="left" md-align="left" lg-align="left">
          <Github github={github} />
        </Details>
      </GridItem>
    </React.Fragment>
  );
};

export default PersonalDetails;
