import React, { useState } from 'react';
import FamilyFeudApi from './apiHelpers';
import useApi from './hooks/useApi';
import { useHistory } from "react-router-dom";

function SelectQuestionForm() {
  const [loading, data] = useApi(FamilyFeudApi.getQuestions);
  const [questionIdx, setQuestionIdx] = useState(0);
  const history = useHistory();

  /**handleChange: set qurstionIdx state to value from select*/
  const handleChange = evt => {
    setQuestionIdx(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    history.push(`/questions/${data.questions[questionIdx].question_main}`);
  }

  return (
    loading ? <p>loading...</p> :
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="questions">Choose a Question: </label>
          <select name="questions" className="Question-select" onChange={handleChange}>
            {data.questions.map((q, idx) => (
              <option key={q.question_main} value={idx}>
                {q.question_main}
              </option>
            ))}
          </select>
          <div>
            <button><b>Choose Question</b></button>
          </div>
        </form>
      </div>
  );
}

export default SelectQuestionForm;