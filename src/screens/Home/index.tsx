import React from "react";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Label from "../../components/Label";
import { Container, Footer } from "./styles";
import { StackNavigationProp } from "@react-navigation/stack";

interface IHomeProps {
  navigation: StackNavigationProp<any, any>;
}

const Home: React.FC<IHomeProps> = ({ navigation }) => {
  return (
    <Container>
      <Header text="Welcome to the Trivia Challenges!" />
      <Label text="You will be presented with 10 True or False questions." />
      <Label text="Can you score 100%?" />
      <Footer>
        <Button onPress={() => navigation.navigate("Quiz")}>BEGIN</Button>
      </Footer>
    </Container>
  );
};

export default Home;
