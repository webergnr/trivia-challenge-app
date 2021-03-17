import { takeLatest } from "redux-saga/effects";
import { handleGetQuestions } from "./handlers/quiz";
import { GET_QUIZ } from "../ducks/quiz";

export function* watcherSaga() {
  yield takeLatest(GET_QUIZ, handleGetQuestions);
}
