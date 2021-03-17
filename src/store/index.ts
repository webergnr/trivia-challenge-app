import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import quizReducer from "./ducks/quiz";
import { watcherSaga } from "./sagas/rootSaga";

const reducer = combineReducers({
  quiz: quizReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);

export type RootState = ReturnType<typeof reducer>;

export default store;
