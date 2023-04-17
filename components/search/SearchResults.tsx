import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { mealType } from "../../types/mealType";
import { useNavigation } from "@react-navigation/native";
import { CompositeScreenFoodType } from "../../types/compositeScreenType";
import ImageLoader from "../Ui/ImageLoader";

type Props = {
  meal: mealType;
};

const SearchResults = ({ meal }: Props) => {
  const navigation = useNavigation<CompositeScreenFoodType>();
  const handlePress = () => {
    navigation.navigate("Food", { idMeal: meal.idMeal });
  };

  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={styles.innerContainer}
        android_ripple={{ color: "#76767626" }}
        onPress={handlePress}
      >
        <View style={styles.imageContainer}>
          <ImageLoader
            style={styles.image}
            source={meal.strMealThumb}
            contentFit="cover"
          />
        </View>
        <Text style={styles.resul}>{meal.strMeal}</Text>
      </Pressable>
    </View>
  );
};

export default SearchResults;

const styles = StyleSheet.create({
  outerContainer: {
    overflow: "hidden",
    borderRadius: 15,
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 20,
    padding: 5,
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 15,
    overflow: "hidden",
  },
  image: {
    flex: 1,
    width: "100%",
  },
  resul: {
    fontFamily: "Poppins-500",
    fontSize: 15,
    color: "#000000",
  },
});
