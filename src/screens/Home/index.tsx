import React from "react";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Label from "../../components/Label";
import { Container, Footer } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Header text="Welcome to the Trivia Challenges!" />
      <Label text="You will be presented with 10 True or False questions." />
      <Label text="Can you score 100%?" />
      <Footer>
        <Button onPress={() => console.log("test")}>BEGIN</Button>
      </Footer>
    </Container>
  );
};

export default Home;
