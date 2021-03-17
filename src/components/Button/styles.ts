import styled, { css } from "styled-components/native";

interface IButtonProps {
  type?: "default" | "danger" | "success";
}

export const ButtonContainer = styled.TouchableOpacity<IButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  margin: 10px;
  border-radius: 10px;
  ${(props) => {
    switch (props.type) {
      case "default":
      default:
        return css`
          background-color: lightblue;
        `;
      case "success":
        return css`
          background-color: lightgreen;
        `;
      case "danger":
        return css`
          background-color: lightpink;
        `;
    }
  }};
`;

export const Text = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;
