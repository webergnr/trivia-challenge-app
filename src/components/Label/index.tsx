import React from "react";
import { Container, Text } from "./styles";

interface ILabelProps {
  text: string;
}

const Label: React.FC<ILabelProps> = ({ text }) => {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  );
};

export default Label;
