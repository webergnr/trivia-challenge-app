import React, { useEffect } from "react";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Header from "../../components/Header";

import { useDispatch, useSelector } from "react-redux";

import { getQuiz, insertAnswer, nextQuestion } from "../../store/ducks/quiz";

import {
  Container,
  Footer,
  Loading,
  LoadingContainer,
  Progress,
  Text,
} from "./styles";
import { RootState } from "../../store";

import { StackNavigationProp } from "@react-navigation/stack";

interface IQuizProps {
  navigation: StackNavigationProp<any, any>;
}

const Quiz: React.FC<IQuizProps> = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuiz());
  }, [dispatch]);

  const {
    count,
    isLoading,
    currentQuestion,
    questions,
    gameState,
  } = useSelector((state: RootState) => ({
    count: state.quiz.questions.length,
    isLoading: state.quiz.loadingQuiz,
    currentQuestion: state.quiz.currentQuestion,
    questions: state.quiz.questions,
    gameState: state.quiz.gameState,
  }));

  const handleTrueButton = () => {
    dispatch(insertAnswer(true, currentQuestion));
    dispatch(nextQuestion());
  };

  const handleFalseButton = () => {
    dispatch(insertAnswer(false, currentQuestion));
    dispatch(nextQuestion());
  };

  useEffect(() => {
    if (!gameState) {
      navigation.navigate("Result");
    }
  }, [gameState]);

  return isLoading ? (
    <LoadingContainer>
      <Loading size="large" />
    </LoadingContainer>
  ) : (
    <>
      {questions.length > 0 && (
        <Container>
          <Header text={questions[currentQuestion].category} />
          <Card text={questions[currentQuestion].text} />
          <Progress>
            <Text>{`${currentQuestion + 1}/${questions.length}`}</Text>
          </Progress>
          <Footer>
            <Button onPress={handleFalseButton} type="danger">
              False
            </Button>
            <Button onPress={handleTrueButton} type="success">
              True
            </Button>
          </Footer>
        </Container>
      )}
    </>
  );
};

export default Quiz;
