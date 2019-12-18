import React, { useState, useEffect } from 'react';
import './App.css';
import TeamForm from './components/TeamForm'
import TeamMember from './components/TeamMember'


function App() {
  const [team, setTeam] = useState([{ name: "igor", role: "everything", email: "igor@igor.com" },
  { name: "igor2", role: "everything2", email: "igor@igor.com2" }])
  useEffect(() => {
    console.log('team', team)
  }, [team])
  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Builder</h1>
      </header>
      <TeamForm />
      {team.map(member => <TeamMember member={member} />)}

    </div>
  );
}

export default App;
