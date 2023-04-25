import { View } from "react-native";
import React from "react";

type Props = {};

const Ellipses = (props: Props) => {
  return (
    <>
      <View
        style={[
          {
            backgroundColor: "#FF7C2B",
            width: 24,
            height: 24,
            borderRadius: 12,
            position: "absolute",
            top: 52,
            left: 51,
          },
        ]}
      ></View>
      <View
        style={[
          {
            backgroundColor: "#FF7C2B",
            width: 24,
            height: 24,
            borderRadius: 12,
            position: "absolute",
            top: 240,
            left: 36,
          },
        ]}
      ></View>
      <View
        style={[
          {
            backgroundColor: "#FF7C2B",
            width: 24,
            height: 24,
            borderRadius: 12,
            position: "absolute",
            top: 373,
            right: 60,
          },
        ]}
      ></View>
      <View
        style={[
          {
            backgroundColor: "#FF7C2B",
            width: 24,
            height: 24,
            borderRadius: 12,
            position: "absolute",
            top: 589,
            right: 40,
          },
        ]}
      ></View>
      <View
        style={[
          {
            backgroundColor: "#FF7C2B",
            width: 236,
            height: 236,
            borderRadius: 118,
            position: "absolute",
            top: -37,
            right: -100,
          },
        ]}
      ></View>
    </>
  );
};

export default Ellipses;
