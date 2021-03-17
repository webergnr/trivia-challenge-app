import React, { useEffect } from "react";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Header from "../../components/Header";

import { useDispatch, useSelector } from "react-redux";

import { getQuiz } from "../../store/ducks/quiz";

import { Container, Footer, Loading, LoadingContainer } from "./styles";
import { RootState } from "../../store";

const Home: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuiz());
  }, [dispatch]);

  const { count, isLoading, currentQuestion, questions } = useSelector(
    (state: RootState) => ({
      count: state.quiz.questions.length,
      isLoading: state.quiz.loadingQuiz,
      currentQuestion: state.quiz.currentQuestion,
      questions: state.quiz.questions,
    })
  );

  return isLoading ? (
    <LoadingContainer>
      <Loading />
    </LoadingContainer>
  ) : (
    <>
      {questions.length > 0 && (
        <Container>
          <Header text={questions[currentQuestion].category} />
          <Card text={questions[currentQuestion].text} />
          <Footer>
            <Button onPress={() => console.log("test")} type="success">
              True
            </Button>
            <Button onPress={() => console.log("test")} type="danger">
              False
            </Button>
          </Footer>
        </Container>
      )}
    </>
  );
};

export default Home;
