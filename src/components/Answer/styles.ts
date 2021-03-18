import styled from "styled-components/native";
import { LinearGradient, LinearGradientProps } from "expo-linear-gradient";

interface IAnswerContainerProps {
  isCorrect: boolean;
}

export const AnswerContainer = styled(LinearGradient).attrs(
  ({ isCorrect }: IAnswerContainerProps) =>
    ({
      colors: isCorrect ? ["#00b09b", "#96c93d"] : ["#cb2d3e", "#ef473a"],
      start: {
        x: 0,
        y: 0,
      },
      end: {
        x: 1,
        y: 1,
      },
    } as LinearGradientProps)
)<IAnswerContainerProps>`
  /* flex: 1; */
  /* height: 100%; */
  /* height: 120px; */
  flex-direction: row;
  padding: 10px;
  border-radius: 10px;
  margin: 10px;
  align-items: center;
`;

export const IconContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const InformationContainer = styled.View`
  height: 100%;
  flex: 5;
`;

export const CategoryText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: white;
  flex: 1;
`;

export const QuestionText = styled.Text`
  font-size: 14px;
  color: white;
  flex: 1;
`;

export const CorrectAnswerText = styled.Text`
  font-size: 12px;
  color: white;
  text-align: right;
  flex: 1;
`;

export const Text = styled.Text`
  color: white;
  font-size: 20px;
  text-align: center;
  font-weight: bold;
`;
