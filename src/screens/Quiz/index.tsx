import React, { useEffect } from "react";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Header from "../../components/Header";

import { useDispatch, useSelector } from "react-redux";

import { getQuiz } from "../../store/ducks/quiz";

import { Container, Footer } from "./styles";
import { RootState } from "../../store";

const Home: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuiz());
  }, [dispatch]);

  const count = useSelector((state: RootState) => state.quiz);

  console.log(count)

  return (
    <Container>
      <Header text="This is the question test!" />
      <Card text="hello" />
      <Footer>
        <Button onPress={() => console.log("test")} type="success">
          True
        </Button>
        <Button onPress={() => console.log("test")} type="danger">
          False
        </Button>
      </Footer>
    </Container>
  );
};

export default Home;
