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
  category: string;
  question: string;
  correctAnswer: boolean;
  isCorrect: boolean;
}

const Answer: React.FC<IAnswerProps> = ({
  category,
  question,
  correctAnswer,
  isCorrect,
}) => {
  return (
    <AnswerContainer isCorrect={isCorrect}>
      <IconContainer>
        {isCorrect ? <IconCorrectAnswer /> : <IconIncorrectAnswer />}
      </IconContainer>
      <InformationContainer>
        <CategoryText>{category}</CategoryText>
        <QuestionText>{question}</QuestionText>
        <CorrectAnswerText>correct answer: {String(correctAnswer)}</CorrectAnswerText>
      </InformationContainer>
    </AnswerContainer>
  );
};

export default Answer;
