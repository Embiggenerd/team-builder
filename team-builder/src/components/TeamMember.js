import React from 'react'

const TeamMember = ({ member }) => {

    return (
        <div className="team-member-container">
            <h1>{member.name}</h1>
            <span>{`role: ${member.role}`}</span>
            <span>{`email: ${member.email}`}</span>
        </div>
    )
}

export default TeamMember