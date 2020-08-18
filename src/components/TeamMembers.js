import React, { useState } from 'react';


function TeamMembers(props) {
    const { teamMembers } = props;

    return teamMembers.map(teamMember => {
        return (
        <>
            <h2>{teamMember.name}</h2>
            <p>{teamMember.email}</p>
            <p>{teamMember.role}</p>
        </>
        )
    })
}
    



export default TeamMembers;