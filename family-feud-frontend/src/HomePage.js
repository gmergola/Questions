import React from 'react';
import SelectQuestionForm from './SelectQuestionForm';
import './HomePage.css';

function HomePage() {
  return (
    <div>
      <div className="HomePage-title">F a m i l y</div>
      <div className="HomePage-title">F e u d</div>
      <SelectQuestionForm />
    </div>
  );
}

export default HomePage;