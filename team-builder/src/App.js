import React, { useState, useEffect } from 'react';
import './App.css';
import TeamForm from './components/TeamForm'
import TeamMember from './components/TeamMember'


function App() {
  const [team, setTeam] = useState([])
  const [memberEdit, setMemberEdit] = useState({})

  const addTeamMember = ({ name, email, role }) => {
    setTeam([...team, { id: Date.now(), name, email, role }])
  }



  const editMember = (id) => {
    console.log('memberEdit', team.filter(member => member.id === id)[0])
    setMemberEdit(team.filter(member => member.id === id)[0])
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Builder</h1>
      </header>
      <TeamForm memberEdit={memberEdit} addTeamMember={addTeamMember} />
      {team.map(member => <TeamMember editMember={editMember}key={member.id} member={member} />)}

    </div>
  );
}

export default App;
