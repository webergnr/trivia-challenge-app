import styled from "styled-components/native";

export const Loading = styled.ActivityIndicator``;

export const Text = styled.Text`
  font-size: 16px;
  color: gray;
  font-weight: bold;
`;

export const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Progress = styled.View`
  height: 80px;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.View`
  height: 100%;
  background-color: white;
`;

export const Footer = styled.View`
  height: 80px;
  flex-direction: row;
`;
