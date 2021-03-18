import { IInitialQuizState, IQuiz, IQuizActions } from "../types/quizTypes";

export const GET_QUIZ = "GET_QUIZ";
export const INSERT_ANSWER = "INSERT_ANSWER";
export const SET_QUIZ = "SET_QUIZ";
export const SET_LOADING = "SET_LOADING";
export const INCREMENT_CURRENT_QUESTION = "INCREMENT_CURRENT_QUESTION";
export const RESET_STATE = "RESET_STATE";

const initialState: IInitialQuizState = {
  questions: [],
  currentQuestion: 0,
  loadingQuiz: false,
  gameState: true,
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

export const nextQuestion = () => ({
  type: INCREMENT_CURRENT_QUESTION,
});

export const insertAnswer = (answer: boolean, questionIndex: number) => ({
  type: INSERT_ANSWER,
  payload: {
    answer,
    questionIndex,
  },
});

export const resetState = () => ({
  type: RESET_STATE,
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
      return { ...newState };
    }
    case INCREMENT_CURRENT_QUESTION: {
      const currentQuestion = state.currentQuestion;
      if (currentQuestion + 1 < state.questions.length) {
        return { ...state, currentQuestion: currentQuestion + 1 };
      }
      return { ...state, gameState: false };
    }
    case RESET_STATE: {
      return initialState;
    }
    default:
      return state;
  }
};
