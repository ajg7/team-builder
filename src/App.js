import React, { useState } from 'react';
import './App.css';
import TeamMembers from "./components/TeamMembers.js";
import TeamMember from "./components/TeamMember";
import TeamMemberForm from "./components/TeamMemberForm";
import teamMemberList from "../src/team-members"

function App() {
  const [teamMembers, setTeamMembers] = useState(teamMemberList);

  const submitForm = (name, email, role) => {
    if (!name || !email || !role) return
  
    const teamMember = {
      name: name,
      email: email,
      role: role
    }
    setTeamMembers([...teamMembers, teamMember])
  
  }

  return (
    <div className="App">
      <header><h2>New Team Member Form</h2></header>
      <TeamMemberForm 
      submit={submitForm}
      />
      <TeamMembers 
      teamMembers={teamMembers}
      />  
    </div>
  );
}

export default App;
