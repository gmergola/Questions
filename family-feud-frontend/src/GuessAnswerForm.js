import React from 'react';

function GuessAnswerForm({ data }) {
  //change backend so there can be more options to submit to the form
  return (
    <div>
      <h4>Submit your answers here:</h4>
      <form>
        {/* add a value to the input */}
        <input name="answer-guess"></input>
      </form>
    </div>
  );
}

export default GuessAnswerForm;