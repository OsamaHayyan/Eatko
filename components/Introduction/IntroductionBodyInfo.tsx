import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import Animated, {
  FadeInLeft,
  FadeInRight,
  Layout,
  SequencedTransition,
  Transition,
} from "react-native-reanimated";

type Props = {
  imageSource: ImageSourcePropType;
  TextTip: string;
};

const IntroductionBodyInfo = ({ imageSource, TextTip }: Props) => {
  return (
    <>
      <Animated.View
        entering={FadeInLeft.duration(600)}
        layout={FadeInLeft.duration(600)}
      >
        <Image source={imageSource} />
      </Animated.View>
      <Animated.View
        entering={FadeInLeft.duration(600)}
        layout={FadeInLeft.duration(600)}
      >
        <Animated.Text style={styles.tipText}>{TextTip}</Animated.Text>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  tipText: {
    fontFamily: "Poppins-400",
    fontSize: 20,
    color: "#000000",
    maxWidth: 295,
    textAlign: "center",
  },
});

export default IntroductionBodyInfo;
