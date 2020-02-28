import React from "react";
import {
  Avatar,
  Heading,
  GridItem,
  Details,
  JobTitle
} from "../styles";

import { Email, Phone, Github, Linkedin, Address } from "./contact";

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
        <Details as="h3" align="left" md-align="left">
          <Email email={email}/>
        </Details>
        <Details as="h3" align="left" md-align="left">
          <Phone phone={phone} />
        </Details>
      </GridItem>
      <GridItem
        xs-start="1"
        xs-span="12"
        sm-start="6"
        sm-span="7"
        lg-start="6"
        lg-span="4"
      >
        <Details as="h3" align="left" md-align="left" lg-align="left">
          <Linkedin linkedin={linkedin} />
        </Details>
        
        <Details as="h3" align="left" md-align="left" lg-align="left">
          <Github github={github} />
        </Details>
      </GridItem>
      <GridItem
        start="1"
        span="12"
        sm-start="6"
        sm-span="7"
        lg-start="10"
        lg-span="3"
      >
        <Details align="left" lg-align="right">
          <Address address={address}/>
        </Details>
      </GridItem>
    </React.Fragment>
  );
};

export default PersonalDetails;
