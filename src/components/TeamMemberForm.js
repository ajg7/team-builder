import React, { useState } from 'react';
import teamMemberList from "../team-members"


function TeamMemberForm(props) {
    const [name, setName] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [role, setRole] = useState(""); 

    const { submit } = props;
    
    const changeName = event => {
        setName(event.target.value)
    }
    const changeEmail = event => {
        setEmail(event.target.value)
    }
    const changeRole = event => {
        setRole(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault();
        submit(name, email, role);
        setName("")
        setEmail("")
        setRole("")
    }

    return (
        <div>
            <h2>Fill Out</h2>
            <form onSubmit={event => handleSubmit(event)}>
                <label className="name">
                    Name: 
                    <input type="text" onChange={changeName} value={name} name="name" /> <br />
                </label>
                <label className="name">
                    Email: 
                    <input type="email" onChange={changeEmail} value={email} name="email" /> <br />
                </label>
                <label className="name">
                    Role: 
                    <input type="text" onChange={changeRole} value={role} name="role" /> <br />
                </label>
                <button id="submit-button">Submit</button>
            </form>
        </div>
    )
}

export default TeamMemberForm;