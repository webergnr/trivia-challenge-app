import React from "react";

import IconCorrectAnswer from "../Icons/Correct";
import IconIncorrectAnswer from "../Icons/Incorrect";

import {
  AnswerContainer,
  CategoryText,
  CorrectAnswerText,
  IconContainer,
  InformationContainer,
  QuestionText,
  Text,
} from "./styles";

interface IAnswerProps {
  text: string;
  isCorrect: boolean;
}

const Answer: React.FC<IAnswerProps> = ({ text, isCorrect }) => {
  return (
    <AnswerContainer isCorrect={isCorrect}>
      <IconContainer>
        {isCorrect ? <IconCorrectAnswer /> : <IconIncorrectAnswer />}
      </IconContainer>
      <InformationContainer>
        <CategoryText>cat test</CategoryText>
        <QuestionText>cat test</QuestionText>
        <CorrectAnswerText>correct answer: false</CorrectAnswerText>
      </InformationContainer>
    </AnswerContainer>
  );
};

export default Answer;
