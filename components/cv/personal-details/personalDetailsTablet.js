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

const PersonalDetailsTablet = ({
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
            start="3"
            span="8"
        >
            <Details align="center">
                <Location address={address}/>
            </Details>
        </GridItem>
        <GridItem
            start="4"
            span="8"
        > 
            <Details as="h3" align="left">
                <Email email={email}/>
            </Details>
            <Details as="h3" align="left">
                <Phone phone={phone} />
            </Details>
        </GridItem>
        <GridItem
            start="4"
            span="8"
        >
            <Details as="h3" align="left">
                <Linkedin linkedin={linkedin} />
            </Details>
            <Details as="h3" align="left">
                <Github github={github} />
            </Details>
        </GridItem>
        <GridItem start="3" span="8">
            <Divider />
        </GridItem>
      </React.Fragment>
    );
  };

  export default PersonalDetailsTablet;