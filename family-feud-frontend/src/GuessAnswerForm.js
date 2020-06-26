import React, { useState } from 'react';

/**ADD VOTE NUMBER AND A TOTAL SOMEWHERE
 * ADD AN X WHEN ANSWER IS WRONG
 */


/**GuessAnswerForm: a form to guess an answer to the question */
function GuessAnswerForm({ data }) {
  const [guessedAnswer, setGuessedAnswer] = useState('');
  const [shownAnswers, setShownAnswers] = useState([]);

  function handleChange(evt) {
    setGuessedAnswer(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    showGuess();
    setGuessedAnswer('');
  }

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

  return (
    <div>
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