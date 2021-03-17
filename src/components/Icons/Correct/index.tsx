import React from "react";

import { FontAwesomeIcon, Props } from "@fortawesome/react-native-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const IconCorrectAnswer: React.FC<Omit<Props, "icon">> = (props) => {
  return <FontAwesomeIcon size={32} color="#fff" {...props} icon={faCheck} />;
};

export default IconCorrectAnswer;
