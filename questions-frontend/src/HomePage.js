import React from 'react';
import { useHistory } from "react-router-dom";
import SelectQuestionForm from './SelectQuestionForm';
import './HomePage.css';

/**TODO:
 * add three X's and a time to change teams!
 * add testing
 */
function HomePage() {
  const history = useHistory();

  return (
    <div className="HomePage-container">
      <div className="HomePage-title-container">
        <div className="HomePage-play">Let's play</div>
        <div className="HomePage-title">Questions!</div>
      </div>
      <button onClick={() => history.push('/directions')}>How to play?</button>
      <SelectQuestionForm />
    </div>
  );
}

export default HomePage;