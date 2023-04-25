import {
  View,
  Pressable,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";
import React from "react";
import * as Progress from "react-native-progress";
import Ionicons from "@expo/vector-icons/Ionicons";

type Props = {
  pageNumber: number;
  onPress: (event: GestureResponderEvent) => void;
};

const IntroductionNextButton = ({ pageNumber, onPress }: Props) => {
  return (
    <Pressable style={styles.nextBtn} onPress={onPress}>
      <View
        style={{
          width: 81,
          height: 81,
          backgroundColor: "#FF7C2B",
          borderRadius: 81,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Ionicons name="chevron-forward-outline" size={25} color={"white"} />
      </View>
      <Progress.Circle
        style={styles.progress}
        borderWidth={0}
        size={97}
        progress={pageNumber / 3}
        color="#FF7C2B"
        thickness={4}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  nextBtn: {
    padding: 8,
  },
  progress: {
    position: "absolute",
  },
});

export default IntroductionNextButton;
