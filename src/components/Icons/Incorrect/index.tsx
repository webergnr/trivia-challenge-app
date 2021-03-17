import React from "react";

import { FontAwesomeIcon, Props } from "@fortawesome/react-native-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const IconIncorrectAnswer: React.FC<Omit<Props, "icon">> = (props) => {
  return <FontAwesomeIcon size={32} color="#fff" {...props} icon={faTimes} />;
};

export default IconIncorrectAnswer;
