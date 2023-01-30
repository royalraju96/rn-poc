import React from "react";
import { View} from "react-native";

const BoxComponent = ({color, children}) => {
  return (
    <View
      style={{
        height: 60,
        backgroundColor: color,
        borderRadius: 13,
        marginBottom: 20,
        justifyContent: "center",
      }}
    >{children}</View>
  );
};

export default BoxComponent;
