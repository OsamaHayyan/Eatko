import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import IntroductionNextButton from "../components/Introduction/IntroductionNextButton";
import IntroductionBodyInfo from "../components/Introduction/IntroductionBodyInfo";
import Animated from "react-native-reanimated";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

type Props = NativeStackScreenProps<RootStackParamList, "Introduction">;
const sentences = [
  "Any recipe you want and look for will find it there",
  "Recipes are presented in the easiest ways and ingredients available in any home.",
  "The app provides recipe videos to follow step by step",
];
const Introduction = ({ navigation }: Props) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [bodyData, setBodyData] = useState({
    image: require("../assets/images/introduction/introduction_1Page.png"),
    text: sentences[0],
  });

  const handleClickNext = () => {
    if (pageNumber == 3) {
      navigation.navigate("HomeScreens");
    }

    const newPageNumber = pageNumber + 1;
    setPageNumber((prevPageNum) => prevPageNum + 1);
    if (newPageNumber == 2) {
      return setBodyData({
        image: require("../assets/images/introduction/introduction_2Page.png"),
        text: sentences[1],
      });
    }
    if (newPageNumber == 3) {
      return setBodyData({
        image: require("../assets/images/introduction/introduction_3Page.png"),
        text: sentences[2],
      });
    }
  };
  return (
    <>
      <Animated.View style={styles.container}>
        <Pressable
          style={styles.section1}
          onPress={() => navigation.replace("HomeScreens")}
        >
          <Text style={styles.skipBtn}>Skip</Text>
        </Pressable>
        <View style={styles.section2}>
          <IntroductionBodyInfo
            imageSource={bodyData.image}
            TextTip={bodyData.text}
          />
          <IntroductionNextButton
            onPress={handleClickNext}
            pageNumber={pageNumber}
          />
        </View>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 45,
    paddingTop: 32,
  },
  section1: {
    alignSelf: "flex-end",
    marginRight: 24,
  },
  skipBtn: {
    fontFamily: "Poppins-300",
    fontSize: 16,
    textDecorationLine: "underline",
  },
  section2: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  tipText: {
    fontFamily: "Poppins-400",
    fontSize: 20,
    color: "#000000",
    maxWidth: 295,
    textAlign: "center",
  },
  nextBtn: {
    padding: 8,
  },
  progress: {
    position: "absolute",
  },
});

export default Introduction;
