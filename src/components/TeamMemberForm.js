import React from 'react';

function TeamMemberForm(props) {
    

    return (
        <div>
            <h2>Fill Out</h2>
            <form>
                <label>
                    Name: 
                    <input type="text" /> <br />
                    Email: 
                    <input type="email" /> <br />
                    Role: 
                    <input type="text" />
                </label>
            </form>
            <button>Submit</button>
        </div>
    )
}

export default TeamMemberForm;