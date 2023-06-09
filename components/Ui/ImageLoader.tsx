import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Image, ImageProps } from "expo-image";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

interface backgroundColor {
  backgroundColor?: string;
}

type Props = ImageProps & backgroundColor;

const ImageLoader = (props: Props) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const rotation = useSharedValue("0deg");
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: rotation.value }],
    };
  });

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming("360deg", { duration: 700, easing: Easing.linear }),
      -1
      // true
    );
  }, []);
  return (
    <>
      {!imageLoaded && (
        <View
          style={{
            flex: 1,
            zIndex: 2,
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: props.backgroundColor,
          }}
        >
          <Animated.View style={[{ flex: 1 }, animatedStyles]}>
            <Image
              source={require("../../assets/images/imageLoadingWithAnimation.png")}
              style={[{ flex: 1, width: "100%", height: "100%" }]}
              contentFit="cover"
              contentPosition={"top"}
              transition={100}
            />
          </Animated.View>
        </View>
      )}
      <Image {...props} onLoad={() => setImageLoaded(true)} />
    </>
  );
};

export default ImageLoader;

const styles = StyleSheet.create({});
