import React from 'react';
import { useHistory } from "react-router-dom";

function Directions() {
  const history = useHistory();
  return (
    <div>
      <button onClick={() => history.push('/')}>Back Home</button>
      <div>
        <h3>A Family Feud inspired game with some changes!</h3>
        <p>Select a question</p>
        <p>Once you've selected a question decide who is team1 and who is team 2.
        </p>
        <p>Once you've decided on the teams, have team1 and team 2 submit an answer.
          After that, the team with the highest voted answer starts!
        </p>
        <p> Once the starting team has been selected, that team has three chances to guess
          as many correct answers as they can. If that team hits three incorrect answers, it is
          the other team's turn.
        </p>
        <p> Every question has 6 answers, when all 6  correct answers have been guessed, the team with
          the highest remaining points wins that round!
        </p>
        <p>Enjoy!</p>
      </div>
    </div>
  )
}

export default Directions;