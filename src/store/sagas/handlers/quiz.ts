import { SagaIterator } from "redux-saga";
import { call, put } from "redux-saga/effects";

import { IQuiz, setQuiz } from "../../ducks/quiz";
import { requestGetQuestions, IResponse, IApiRequest } from "../requests/quiz";

export function* handleGetQuestions(): SagaIterator {
  try {
    const response: IResponse = yield call(requestGetQuestions);
    const { data } = response;
    const dtoSetQuiz = formatResponse(data);
    yield put(setQuiz(dtoSetQuiz));
  } catch (error) {
    // TODO - make warning or toast for the user.
    console.log(error);
  }
}

const formatResponse = (data: IApiRequest): IQuiz => {
  return {
    questions: data.results.map((i) => ({
      category: i.category,
      correctAnswer: i.correct_answer === "True" ? true : false,
      text: i.question,
    })),
  };
};
