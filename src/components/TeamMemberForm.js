import React from 'react';
import styled-components from "styled-components"


function TeamMemberForm(props) {
    

    return (
        <div>
            <h2>Fill Out</h2>
            <form>
                <label>
                    Name:
                    <input type="text" />
                    Email:
                    <input type="email" />
                    Role:
                    <input type="text" />
                </label>
            </form>
            <button>Submit</button>
        </div>
    )
}

export default TeamMemberForm;