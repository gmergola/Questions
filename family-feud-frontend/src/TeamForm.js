import React, { useState, useEffect } from 'react';

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

  useEffect(
    function changeTotals() {
      if (currentVote !== undefined) {
        if (team === 'team1') {
          setTeam1Total((total) => total + currentVote);
        }
        if (team === 'team2') {
          setTeam2Total((total) => total + currentVote);
        }
      }
    }, [currentVote]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-check">
          <input
            onChange={handleChange}
            className="form-check-input"
            type="radio"
            name="teamRadios"
            id="teamRadios1"
            value="team1"
            checked={team === "team1"}></input>
          <label className="form-check-label" htmlFor="teamRadios1">Team 1</label>
        </div>
        <div className="form-check">
          <input
            onChange={handleChange}
            className="form-check-input"
            type="radio"
            name="teamRadios"
            id="teamRadios2"
            value="team2"
            checked={team === "team2"}></input>
          <label className="form-check-label" htmlFor="teamRadios2">Team 2</label>
        </div>
        <button >Save</button>
      </form>
      <h5>Team 1 total: {team1Total}</h5>
      <h5>Team 2 total: {team2Total}</h5>
    </div>
  )
}

export default TeamForm;