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

const PersonalDetailsMobile = ({
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
                <Details align="center">
                    <Location address={address}/>
                </Details>
                <Details align="center">
                    <Linkedin linkedin={linkedin} />
                    <Github github={github} />
                    <Phone phone={phone} />
                    <Email email={email}/> 
                </Details>
            </GridItem>
            <GridItem start="3" span="8">
                <Divider/>
            </GridItem>
      </React.Fragment>
    );
  };

  export default PersonalDetailsMobile;