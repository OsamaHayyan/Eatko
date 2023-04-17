import { Dimensions, StyleProp, ViewStyle } from "react-native";
import React, { PropsWithChildren, useCallback } from "react";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useFocusEffect } from "@react-navigation/native";

type Props = PropsWithChildren<{
  style?: StyleProp<ViewStyle>;
}>;

const AnimatedView = ({ style, children }: Props) => {
  let { width } = Dimensions.get("screen");
  const offset = useSharedValue(width);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value }],
    };
  });

  useFocusEffect(
    useCallback(() => {
      offset.value = withTiming(0, {
        duration: 250,
        easing: Easing.ease,
      });

      return () =>
        (offset.value = withTiming(width, {
          duration: 250,
          easing: Easing.ease,
        }));
    }, [])
  );

  return (
    <Animated.View style={[style, animatedStyles]}>{children}</Animated.View>
  );
};

export default AnimatedView;
