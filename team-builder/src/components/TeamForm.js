import React, { useState, useEffect } from "react";

const TeamForm = ({memberToEdit, formMode, setFormMode, addTeamMember, saveTeamMember}) => {
    const [member, setMember] = useState({
        name: "",
        email: "",
        role: ""
    });
    

    useEffect(()=>{
        setMember(memberToEdit)
    },[memberToEdit])

    const handleChanges = e => {
        setMember({
            ...member,
            [e.target.name]: e.target.value
        });
    };

    const submitForm = e => {
        e.preventDefault();
        if(formMode === "edit"){
            saveTeamMember(member)
            setMember({ name: "", email: "", role: "" });
            setFormMode('add')
            return
        }
        addTeamMember(member);
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
            <button type="submit">{formMode}</button>
        </form>
    );
};

export default TeamForm;
