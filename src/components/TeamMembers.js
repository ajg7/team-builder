import React, { useState } from 'react';
import teamMemberList from "../team-members"


function TeamMembers(props) {
    const [teamMembers, setTeamMembers] = useState(teamMemberList);

    return teamMembers.map(teamMember => {
        console.log(teamMember)
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