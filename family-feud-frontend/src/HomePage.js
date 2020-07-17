import React from 'react';
import SelectQuestionForm from './SelectQuestionForm';
import './HomePage.css';

function HomePage() {
  return (
    <div className="HomePage-container">
      <div className="HomePage-title-container">
        <div className="HomePage-play">Let's play</div>
        <div className="HomePage-title">Family Feud!</div>
      </div>
      <SelectQuestionForm />
    </div>
  );
}

export default HomePage;