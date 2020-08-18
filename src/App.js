import React, { useState } from 'react';
import './App.css';
import TeamMembers from "./components/TeamMembers.js";
import TeamMember from "./components/TeamMember";
import TeamMemberForm from "./components/TeamMemberForm";


const initialFormValues = {
    name: "",
    email: "",
    role: "",
}



function App() {


  return (
    <div className="App">
      <header><h2>New Team Member Form</h2></header>
      <TeamMemberForm />
      <TeamMembers />  
    </div>
  );
}

export default App;
