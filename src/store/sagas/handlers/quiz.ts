import { SagaIterator } from "redux-saga";
import { call, put } from "redux-saga/effects";
import { decode } from "html-entities";

import { setLoading, setQuiz } from "../../ducks/quiz";
import { IQuiz } from "../../types/quizTypes";
import { requestGetQuestions, IResponse, IApiRequest } from "../requests/quiz";

export function* handleGetQuestions(): SagaIterator {
  try {
    yield put(setLoading(true));
    const response: IResponse = yield call(requestGetQuestions);
    const { data } = response;
    const dtoSetQuiz = formatResponse(data);
    yield put(setLoading(false));
    yield put(setQuiz(dtoSetQuiz));
  } catch (error) {
    yield put(setLoading(false));
    // TODO - make warning or toast for the user.
    console.log(error);
  }
}

const formatResponse = (data: IApiRequest): IQuiz => {
  return {
    questions: data.results.map((i) => ({
      category: i.category,
      correctAnswer: i.correct_answer === "True" ? true : false,
      text: decode(i.question),
    })),
  };
};
