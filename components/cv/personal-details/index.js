import React from 'react';

const PersonalDetails = ({name, title, email, linkedin, github, address}) => {
    return (
        <div>
        <p>{name}</p>
        <p>{title}</p>
        <p>{email}</p>
        <p>{linkedin}</p>
        <p>{github}</p>
        <p>{address}</p>
      </div>
    )
}

export default PersonalDetails;