import { View, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import Ellipses from "../components/Ellipses";
import { useAppDispatch, useAppSelector } from "../store/redux";
import { setAppOpened } from "../store/introductionSlice";

type Props = NativeStackScreenProps<RootStackParamList, "Introduction">;

const AppLoading = ({ navigation }: Props) => {
  const appOpened = useAppSelector(({ introduction }) => introduction);
  const dispatch = useAppDispatch();
  const size = useSharedValue(1173);
  const leftPosition = useSharedValue(-55);
  const topPosition = useSharedValue(94);
  const opacity = useSharedValue(0);

  const ellipseStyle = useAnimatedStyle(() => {
    return {
      width: size.value,
      height: size.value,
    };
  });

  const iconStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      left: leftPosition.value,
      top: topPosition.value,
    };
  });
  useEffect(() => {
    let wrapper: () => void;
    if (appOpened) {
      wrapper = () => {
        navigation.replace("HomeScreens");
      };
    } else {
      dispatch(setAppOpened(true));
      wrapper = () => {
        navigation.replace("Introduction");
      };
    }
    opacity.value = withTiming(1, { duration: 1500 });
    leftPosition.value = withTiming(0, {
      duration: 1500,
      easing: Easing.inOut(Easing.quad),
    });
    topPosition.value = withTiming(0, {
      duration: 1500,
      easing: Easing.inOut(Easing.quad),
    });
    size.value = withTiming(566, { duration: 1500 }, () => runOnJS(wrapper)());
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Ellipses />
      <Animated.View
        style={[styles.animatedEllipse, ellipseStyle]}
      ></Animated.View>
      <Animated.Image
        source={require("../assets/images/icon.png")}
        style={[styles.animatedIcon, iconStyle]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  animatedEllipse: {
    backgroundColor: "#FF7C2B",
    width: 1173,
    height: 1173,
    borderRadius: 1173,
    position: "absolute",
    bottom: -283,
    left: -283,
  },
  animatedIcon: { width: 400, height: 400, marginBottom: 145 },
});
export default AppLoading;
