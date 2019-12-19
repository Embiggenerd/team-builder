import React from 'react'

const TeamMember = ({ member, editMember }) => {

    return (
        <div className="team-member-container">
            <h1>{member.name}</h1>
            <p>{`role: ${member.role}`}</p>
            <p>{`email: ${member.email}`}</p>
            <button onClick={()=>editMember(member.id)} >Edit</button>
        </div>
    )
}

export default TeamMember