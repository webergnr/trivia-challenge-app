import React, { useEffect } from "react";
import Header from "../../components/Header";

import { Container, Footer, Loading, LoadingContainer } from "./styles";

import { StackNavigationProp } from "@react-navigation/stack";

interface IResultProps {
  navigation: StackNavigationProp<any, any>;
}

const Result: React.FC<IResultProps> = ({ navigation }) => {
  return (
    <Container>
      <Header text="Your results" />
    </Container>
  );
};

export default Result;
