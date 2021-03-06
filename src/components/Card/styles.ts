import styled from "styled-components/native";
import { LinearGradient, LinearGradientProps } from "expo-linear-gradient";

export const CardContainer = styled(LinearGradient).attrs({
  colors: ["#ffd89b", "#19547b"],
  start: {
    x: 0,
    y: 0,
  },
  end: {
    x: 1,
    y: 1,
  },
} as LinearGradientProps)`
  flex: 1;
  padding: 20px;
  border-radius: 10px;
  margin: 10px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  color: white;
  font-size: 20px;
  text-align: center;
  font-weight: bold;
`;
