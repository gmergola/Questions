const db = require("../db");
const ExpressError = require("../expressError");

/**Question: class for querying database to get questions and answers */
class Question {

  /**getAll: get all questions */
  static async getAll () {
    const result = await db.query(
      `SELECT * FROM questions`
    );

    let questions = result.rows;

    let response = questions.map(question => (
      {
        question_main: question.question_main,
        question: question.question
      }));

    return {questions: response};
  }

  /**get: get a question by it's "id" --> question_main */
  static async get(question_main) {
    const result = await db.query(
        `SELECT questions.question,
                answers.answer,
                answers.vote
          FROM questions
            JOIN answers ON questions.question_main = answers.question_main
          WHERE questions.question_main = $1`,
        [question_main]);

    let answers = result.rows;

    if (answers.length === 0) {
      throw new ExpressError(`No such Question with question_main: ${question_main}`, 404);
    }

    return {
      question: answers[0].question,
      answers: answers.map(answerDetails => {
        return {answer: answerDetails.answer, vote: answerDetails.vote};
      })
    }
  }
}

module.exports = Question;