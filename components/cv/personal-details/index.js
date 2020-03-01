import React from "react";
import PersonalDetailsDesktop from './personalDetailsDesktop';
import PersonalDetailsMobile from './personalDetailsMobile';
import PersonalDetailsTablet from './personalDetailsTablet';
import { useDevice } from "../../hooks";

const PersonalDetails= (props) => {
  const { isMOBILE, isTABLET } = useDevice(); 
  const PersonalDetails = isMOBILE ?  <PersonalDetailsMobile {...props}/> 
    : isTABLET ? <PersonalDetailsTablet {...props} />
    : <PersonalDetailsDesktop {...props} />;
    
  return (
    <>
      {PersonalDetails}
    </>
  )
}
export default PersonalDetails;
