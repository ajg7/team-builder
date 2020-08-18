import React, { useState } from 'react';
import teamMemberList from "../team-members"


function TeamMemberForm(props) {
    const [name, setName] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [role, setRole] = useState(""); 
    
    const changeName = event => {
        console.log(event.target.value);
        setName(event.target.value)
    }
    const changeEmail = event => {
        console.log(event.target.value);
        setEmail(event.target.value)
    }
    const changeRole = event => {
        console.log(event.target.value);
        setRole(event.target.value)
    }

    return (
        <div>
            <h2>Fill Out</h2>
            <form>
                <label className="name">
                    Name: 
                    <input type="text" onChange={changeName}/> <br />
                </label>
                <label className="name">
                    Email: 
                    <input type="email" onChange={changeEmail}/> <br />
                </label>
                <label className="name">
                    Role: 
                    <input type="text" onChange={changeRole}/> <br />
                </label>
            </form>
            <button>Submit</button>
        </div>
    )
}

export default TeamMemberForm;