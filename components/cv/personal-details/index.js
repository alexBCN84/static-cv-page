import React from "react";
import {
  Avatar,
  Heading,
  GridItem,
  Details,
  AddressDetails,
  JobTitle
} from "../styles";

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
          {email}
        </Details>
        <Details as="h3" align="left" md-align="left">
          {phone}
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
        <Details as="h3" align="left" md-align="left" lg-align="center">
          {linkedin}
        </Details>
        <Details as="h3" align="left" md-align="left" lg-align="center">
          {github}
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
        <AddressDetails align="left" lg-align="right">
          {address}
        </AddressDetails>
      </GridItem>
    </React.Fragment>
  );
};

export default PersonalDetails;
