import React, { useState } from 'react';
import './GuessAnswerForm.css';
import TeamForm from './TeamForm';

/**
 * TODO: ADD AN X WHEN ANSWER IS WRONG
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
    <div className="GuessAnswerForm-container">
      <TeamForm currentVote={shownAnswers[shownAnswers.length - 1]?.vote}/>
      <div className="GuessAnswerForm-label"><b>Submit your answers here:</b></div>
      <form onSubmit={handleSubmit}>
        <input
          className="GuessAnswerForm-input"
          onChange={handleChange}
          name="answer-guess"
          value={guessedAnswer}></input>
        <button className="GuessAnswerForm-button"><b>Submit Answer</b></button>
      </form>
      <div>
        {shownAnswers.map(answer =>
          <div className="GuessAnswerForm-answer" key={answer.vote}>
            <b>{answer.answer.toUpperCase()}</b> <i>number of votes &#8594; {answer.vote}</i>
          </div>)}
      </div>
    </div>
  );
}

export default GuessAnswerForm;