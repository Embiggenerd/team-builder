import React, { useState, useEffect } from 'react';
import './App.css';
import TeamForm from './components/TeamForm'
import TeamMember from './components/TeamMember'


function App() {
  const [team, setTeam] = useState([])
  const [memberToEdit, setMemberToEdit] = useState({})
  const [formMode, setFormMode] = useState('add')

  const addTeamMember = ({ name, email, role }) => {
    setTeam([...team, { id: Date.now(), name, email, role }])
  }



  const editMember = (id) => {
    console.log('memberEdit', team.filter(member => member.id === id)[0])
    setMemberToEdit(team.filter(member => member.id === id)[0])
    setFormMode('edit')
  }

  const saveTeamMember = (member) => {
    console.log('member to save=', member)
    const index = team.findIndex(m => m.id === member.id)
    const oldTeam = [...team]
    oldTeam[index] = member
    setTeam(oldTeam)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Builder</h1>
      <TeamForm saveTeamMember={saveTeamMember} formMode={formMode} setFormMode={setFormMode} memberToEdit={memberToEdit} addTeamMember={addTeamMember} />
      {team.map(member => <TeamMember setFormMode={setFormMode} editMember={editMember} key={member.id} member={member} />)}
      </header>

    </div>
  );
}

export default App;
