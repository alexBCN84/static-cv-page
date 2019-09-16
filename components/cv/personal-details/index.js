import React from "react";
import {
  Heading,
  GridItem,
  Details,
  AddressDetails,
  Subheadline
} from "../styles";

const PersonalDetails = ({
  name,
  title,
  email,
  phone,
  linkedin,
  github,
  address
}) => {
  return (
    <React.Fragment>
      <GridItem xs-start="1" sm-start="1" sm-span="5" xs-span="12">
        <Heading>{name}</Heading>
        <Subheadline>{title}</Subheadline>
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
