import React from "react";
import { ButtonContainer, Text } from "./styles";

interface IButtonProps {
  onPress(): void;
  type?: "default" | "danger" | "success";
}

const Button: React.FC<IButtonProps> = ({ children, onPress, type }) => {
  return (
    <ButtonContainer type={type} onPress={onPress}>
      <Text>{children}</Text>
    </ButtonContainer>
  );
};

export default Button;
