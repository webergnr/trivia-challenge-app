import React from "react";
import { Container, Text } from "./styles";

interface IHeaderProps {
  text: string;
}

const Header: React.FC<IHeaderProps> = ({ text }) => {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  );
};

export default Header;
