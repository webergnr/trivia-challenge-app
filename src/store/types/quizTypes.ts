import { INSERT_ANSWER, SET_QUIZ, SET_LOADING } from "../ducks/quiz";

export interface ISetQuizAction {
  type: typeof SET_QUIZ;
  payload: IQuiz;
}

export interface ISetLoadingAction {
  type: typeof SET_LOADING;
  payload: boolean;
}

export interface IInsertAnswerAction {
  type: typeof INSERT_ANSWER;
  payload: {
    answer: boolean;
    questionIndex: number;
  };
}

export type IQuizActions =
  | ISetQuizAction
  | IInsertAnswerAction
  | ISetLoadingAction;

export interface IQuiz {
  questions: {
    text: string;
    category: string;
    userAnswer?: boolean;
    correctAnswer: boolean;
  }[];
}

export interface IInitialQuizState extends IQuiz {
  currentQuestion: number;
  loadingQuiz: boolean;
}
