import React, { useState, useEffect } from 'react';
import './TeamForm.css';

function TeamForm({ currentVote }) {
  const [team, setTeam] = useState('team1');
  const [team1Total, setTeam1Total] = useState(0);
  const [team2Total, setTeam2Total] = useState(0);

  function handleChange(evt) {
    setTeam(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log(team);
  }

  function changeTotals() {
    if (currentVote !== undefined) {
      if (team === 'team1') {
        setTeam1Total((total) => total + currentVote);
      }
      if (team === 'team2') {
        setTeam2Total((total) => total + currentVote);
      }
    }
  }

  useEffect(changeTotals, [currentVote]);

  return (
    <div className="TeamForm-container">
      <form onSubmit={handleSubmit}>
        <div className="form-check TeamForm-team1">
          <input
            onChange={handleChange}
            className="form-check-input"
            type="radio"
            name="teamRadios"
            id="teamRadios1"
            value="team1"
            checked={team === "team1"}></input>
          <label htmlFor="teamRadios1"><b>Team 1</b></label>
        </div>
        <div className="form-check TeamForm-team2">
          <input
            onChange={handleChange}
            className="form-check-input"
            type="radio"
            name="teamRadios"
            id="teamRadios2"
            value="team2"
            checked={team === "team2"}></input>
          <label htmlFor="teamRadios2"><b>Team 2</b></label>
        </div>
        <button className="TeamForm-save-button"><b>Save</b></button>
      </form>
      <h5 className="TeamForm-team1-total">Team 1 total: {team1Total}</h5>
      <h5 className="TeamForm-team2-total" >Team 2 total: {team2Total}</h5>
    </div>
  )
}

export default TeamForm;