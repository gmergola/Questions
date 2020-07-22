import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Routes from "./Routes";


function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;

/**
 * rendered in App --> SelectQuestionForm
 * rendered in SelectQuestionForm --> Question
 * rendered in Question --> GuessAnswerForm
 *
 */
