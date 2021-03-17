import React, { useEffect } from "react";
import Header from "../../components/Header";

import { Container, Text } from "./styles";

import { useSelector } from "react-redux";

import { StackNavigationProp } from "@react-navigation/stack";
import { RootState } from "../../store";
import Answer from "../../components/Answer";

interface IResultsProps {
  navigation: StackNavigationProp<any, any>;
}

const Results: React.FC<IResultsProps> = ({ navigation }) => {
  const { questions } = useSelector((state: RootState) => ({
    questions: state.quiz.questions,
  }));

  return (
    <Container>
      <Header text="Your results" />
      {questions.map((q) => (
        <Answer isCorrect={q.correctAnswer == q.userAnswer} text="test" />
      ))}
    </Container>
  );
};

export default Results;
