import React from 'react';
import { useParams} from "react-router-dom";
import GuessAnswerForm from './GuessAnswerForm';
import FamilyFeudApi from './apiHelpers';
import useApi from './hooks/useApi';

function Question() {
  const { question_main } = useParams();
  const [loading, data] = useApi(FamilyFeudApi.getQuestion, question_main);
  // add a select a new question button that shows the form
  return (
    loading ? <p>Loading...</p> :
    <div>
      <h1>{data.question}</h1>
      <GuessAnswerForm data={data}/>
    </div>
  );
}

export default Question;