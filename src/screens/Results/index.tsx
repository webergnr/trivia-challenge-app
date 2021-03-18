import React, { useEffect } from "react";
import Header from "../../components/Header";

import { AnswerList, Container, Footer } from "./styles";
import { useDispatch, useSelector } from "react-redux";

import { StackNavigationProp } from "@react-navigation/stack";
import { RootState } from "../../store";

import Answer from "../../components/Answer";
import Button from "../../components/Button";
import { resetState } from "../../store/ducks/quiz";

interface IResultsProps {
  navigation: StackNavigationProp<any, any>;
}

const Results: React.FC<IResultsProps> = ({ navigation }) => {
  const { questions } = useSelector((state: RootState) => ({
    questions: state.quiz.questions,
  }));

  const dispatch = useDispatch();

  const handlePlayAgain = () => {
    dispatch(resetState());
    navigation.navigate("Home");
  };

  return (
    <Container>
      <Header text="Your results" />
      <AnswerList>
        {questions.map((q, i) => (
          <Answer
            key={i}
            isCorrect={q.correctAnswer == q.userAnswer}
            category={q.category}
            correctAnswer={q.correctAnswer}
            question={q.text}
          />
        ))}
        <Footer>
          <Button onPress={handlePlayAgain}>PLAY AGAIN</Button>
        </Footer>
      </AnswerList>
    </Container>
  );
};

export default Results;
