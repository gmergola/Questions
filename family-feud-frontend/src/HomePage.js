import React from 'react';
import SelectQuestionForm from './SelectQuestionForm';
import './HomePage.css';

function HomePage() {
  return (
    <div>
      <div className="HomePage-title">Family Feud!</div>
      <SelectQuestionForm />
    </div>
  );
}

export default HomePage;