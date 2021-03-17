export const GET_QUIZ = "GET_QUIZ";
const SET_QUIZ = "SET_QUIZ";

interface IAction {
  type: string;
  payload: any;
}

export interface IQuiz {
  questions: {
    text: string;
    category: string;
    userAnswer?: boolean;
    correctAnswer: boolean;
  }[];
}

interface IInitialState {
  quiz: IQuiz;
}

export const getQuiz = () => ({
  type: GET_QUIZ,
});

export const setQuiz = (quiz: IQuiz) => ({
  type: SET_QUIZ,
  quiz,
});

const initialState: IInitialState = {
  quiz: {
    questions: [],
  },
};

export default (state = initialState, action: IAction) => {
  switch (action.type) {
    case SET_QUIZ:
      const { payload: quiz } = action;
      return { ...state, quiz };
    default:
      return state;
  }
};
