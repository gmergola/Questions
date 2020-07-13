import React, { useState } from 'react';
import './GuessAnswerForm.css';
import TeamForm from './TeamForm';

/**ADD A TOTAL SOMEWHERE
 * ADD AN X WHEN ANSWER IS WRONG
 */


/**GuessAnswerForm: a form to guess an answer to the question */
function GuessAnswerForm({ data }) {
  const [guessedAnswer, setGuessedAnswer] = useState('');
  const [shownAnswers, setShownAnswers] = useState([]);

  /**showGuess: logic for showing an answer compared to what the user guessed */
  function showGuess() {
    for (let answer of data.answers) {
      if (answer.answer.toLowerCase() === guessedAnswer.toLowerCase() ||
        answer.options.includes(guessedAnswer.toLowerCase())) {
        if (!shownAnswers.includes(answer.answer)) {
          setShownAnswers([...shownAnswers, { answer: answer.answer, vote: answer.vote }]);
        }
      }
    }
  }

  function handleChange(evt) {
    setGuessedAnswer(evt.target.value);
  }


  function handleSubmit(evt) {
    evt.preventDefault();
    showGuess();
    setGuessedAnswer('');
  }

  console.log(data);

  return (
    <div className="form-container">
      <TeamForm currentVote={shownAnswers[shownAnswers.length - 1]?.vote}/>
      <h4>Submit your answers here:</h4>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="answer-guess"
          value={guessedAnswer}></input>
        <button>Submit Answer</button>
      </form>
      <div>
        {shownAnswers.map(answer =>
          <div key={answer.vote}>
            {answer.answer} {answer.vote}
          </div>)}
      </div>
    </div>
  );
}

export default GuessAnswerForm;