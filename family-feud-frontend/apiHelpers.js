import axios from "axios";

class FamilyFeudApi {

  /*getQuestions: gets all Questions*/
  static async getQuestion() {
    try{
      let response = await axios({url: '/questions', method: 'get'});
      return response.data;
    }catch (err){
      let message = err.response.data.message;
      throw message;
    }
  }

  /*getQuestion: gets question by questionMain*/
  static async getQuestion(questionMain) {
    try{
      let response = await axios({url: `/question/${questionMain}`, method: 'get'});
      return response.data;
    }catch (err){
      let message = err.response.data.message;
      throw message;
    }
  }
}