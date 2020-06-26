import React from 'react';
import { useParams} from "react-router-dom";
import GuessAnswerForm from './GuessAnswerForm';
import FamilyFeudApi from './apiHelpers';
import useApi from './hooks/useApi';
import { useHistory } from "react-router-dom";

function Question() {
  const { question_main } = useParams();
  const [loading, data] = useApi(FamilyFeudApi.getQuestion, question_main);
  const history = useHistory();

  function selectANewQuestion() {
    history.push('/');
  }

  return (
    loading ? <p>Loading...</p> :
    <div>
      <h1>{data.question}</h1>
      <button onClick={selectANewQuestion}>Select A New Question</button>
      <GuessAnswerForm data={data}/>
    </div>
  );
}

export default Question;