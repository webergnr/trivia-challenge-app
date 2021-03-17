import React from "react";
import { CardContainer, Text } from "./styles";

interface ICardProps {
  text: string;
}

const Card: React.FC<ICardProps> = ({ text }) => {
  return (
    <CardContainer>
      <Text>{text}</Text>
    </CardContainer>
  );
};

export default Card;
