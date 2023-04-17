import { StyleSheet, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import Animated, {
  Easing,
  FadeIn,
  FadeOut,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

type Props = {};

const Loading = (props: Props) => {
  return (
    <Animated.View
      style={styles.container}
      entering={FadeIn.easing(Easing.linear)}
      exiting={FadeOut.easing(Easing.linear)}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: 100,
          width: 100,
        }}
      >
        <Image
          source={require("../../assets/images/loading.gif")}
          style={{ flex: 1, width: "100%" }}
          contentFit="contain"
        />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
export default Loading;
