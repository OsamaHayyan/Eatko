import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { CompositeScreenHomeType } from "../types/compositeScreenType";

type Props = {
  id: string;
  image: string;
  name: string;
};

const Category = ({ id, name, image }: Props) => {
  const { navigate } = useNavigation<CompositeScreenHomeType>();
  const handlePress = () => {
    navigate("Menu", { category: name });
  };

  if (name === "Pork" || name === "Goat") return null;

  const handleBackground = () => {
    switch (name) {
      case "Beef":
        return "#615955";
      case "Chicken":
        return "#CCB7A2";
      case "Lamb":
        return "#958F9A";

      case "Dessert":
        return "#759990";

      case "Seafood":
        return "#D36A6A";

      case "Pasta":
        return "#FFB77A";

      case "Starter":
        return "#C8A6D1";

      case "Side":
        return "#9EC4E6";

      case "Vegetarian":
        return "#D6DDBE";

      case "Vegan":
        return "#839675";

      case "Miscellaneous":
        return "#E5B895";

      case "Breakfast":
        image = require("../assets/images/categories/breakfast.png");
        return "#BB9F9F";
    }
  };

  return (
    <View
      style={[
        styles.categoryContainer,
        { backgroundColor: handleBackground() },
      ]}
    >
      <Pressable
        style={styles.category}
        android_ripple={{ color: "#ffffff8a" }}
        onPress={handlePress}
      >
        <Text style={styles.categoryName} numberOfLines={1}>
          {name}
        </Text>
        <View style={styles.imageContainer}>
          <Image source={image} contentFit="contain" style={styles.image} />
        </View>
      </Pressable>
    </View>
  );
};

export default Category;

const width = Dimensions.get("screen").width;
const styles = StyleSheet.create({
  categoryContainer: {
    overflow: "hidden",
    elevation: 4,
    borderRadius: 25,
  },
  category: {
    justifyContent: "space-between",
    // backgroundColor: "red",
    width: width / 2 - 32,
    height: width / 2 - 32,
    paddingLeft: 16,
    paddingTop: 20,
  },
  categoryName: {
    fontFamily: "Poppins-500",
    fontSize: 24,
    lineHeight: 36,
    color: "#FFFFFF",
  },
  imageContainer: {
    flex: 1,
    width: "100%",
    alignSelf: "flex-end",
  },
  image: {
    flex: 1,
  },
});
