import React, { useState } from 'react';
import './App.css';
import TeamMembers from "./components/TeamMembers.js"

function App() {
  const [formValues, setFormValues] = useState("")

  return (
    <div className="App">
      <TeamMembers />   
    </div>
  );
}

export default App;
