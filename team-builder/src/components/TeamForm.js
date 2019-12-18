import React, { useState, useEffect } from "react";

const TeamForm = props => {
    const [member, setMember] = useState({
        name: "",
        email: "",
        role: ""
    });

    useEffect(()=>{
        setMember(props.memberEdit)
    },[props.memberEdit])

    const handleChanges = e => {
        setMember({
            ...member,
            [e.target.name]: e.target.value
        });
    };

    const submitForm = e => {
        e.preventDefault();
        props.addTeamMember(member);
        setMember({ name: "", email: "", role: "" });
    };

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name</label>
            <input
                id="name"
                type="text"
                placeholder="name"
                onChange={handleChanges}
                name="name"
                value={member.name}
            />
            <label htmlFor="email">Email</label>
            <input
                id="email"
                name="email"
                onChange={handleChanges}
                value={member.email}
            />
            <label htmlFor="role">Role</label>
            <input
                id="role"
                name="role"
                onChange={handleChanges}
                value={member.role}
            />
            <button type="submit">Add Team Member</button>
        </form>
    );
};

export default TeamForm;
