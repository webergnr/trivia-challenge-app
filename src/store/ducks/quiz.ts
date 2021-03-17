import { IInitialQuizState, IQuiz, IQuizActions } from "../types/quizTypes";

export const GET_QUIZ = "GET_QUIZ";
export const INSERT_ANSWER = "INSERT_ANSWER";
export const SET_QUIZ = "SET_QUIZ";
export const SET_LOADING = "SET_LOADING";

const initialState: IInitialQuizState = {
  questions: [],
  currentQuestion: 0,
  loadingQuiz: false,
};

export const getQuiz = () => ({
  type: GET_QUIZ,
});

export const setLoading = (status: boolean) => ({
  type: SET_LOADING,
  payload: status,
});

export const setQuiz = (quiz: IQuiz) => ({
  type: SET_QUIZ,
  payload: quiz,
});

export default (
  state = initialState,
  action: IQuizActions
): IInitialQuizState => {
  switch (action.type) {
    case SET_QUIZ: {
      const { payload } = action;
      return { ...state, questions: payload.questions };
    }
    case SET_LOADING: {
      const { payload } = action;
      return { ...state, loadingQuiz: payload };
    }
    case INSERT_ANSWER: {
      const { payload } = action;
      const newState = { ...state };
      newState.questions[payload.questionIndex].userAnswer = payload.answer;
      return newState;
    }
    default:
      return state;
  }
};
