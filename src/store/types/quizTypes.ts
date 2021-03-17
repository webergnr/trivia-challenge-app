import {
  INSERT_ANSWER,
  SET_QUIZ,
  SET_LOADING,
  INCREMENT_CURRENT_QUESTION,
} from "../ducks/quiz";

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

export interface IIncrementCurrentQuestion {
  type: typeof INCREMENT_CURRENT_QUESTION;
}

export type IQuizActions =
  | ISetQuizAction
  | IInsertAnswerAction
  | ISetLoadingAction
  | IIncrementCurrentQuestion;

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
  gameState: boolean;
}
