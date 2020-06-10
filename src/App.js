import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import TeamMember from './TeamMember'
function App() {
  const [teamMember, setTeamMember] = useState([{
    id: 0,
    name:'kevin',
    email:'thew',
    role:'new',
  }]);
  
  const addNewMember = form =>{
    setTeamMember([...teamMember, { ...form, id: Date.now() }]);
  }
console.log (teamMember)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <h2>New Team Member Form</h2>
        <Form addNewMember={addNewMember} />
      </div>
      <div>
        <TeamMember teamMember={teamMember}/>
      </div>
     
    </div>
  );
}

export default App;
