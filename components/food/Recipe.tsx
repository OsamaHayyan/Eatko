import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {
  recipeInstructions: string;
};

const Recipe = ({ recipeInstructions }: Props) => {
  return (
    <View>
      <Text style={styles.recipeHeader}>Recipe</Text>
      <Text style={styles.recipeInsturctions}>{recipeInstructions}</Text>
    </View>
  );
};

export default Recipe;

const styles = StyleSheet.create({
  recipeHeader: {
    fontFamily: "Poppins-600",
    fontSize: 24,
    color: "#000000",
  },
  recipeInsturctions: {
    fontFamily: "Poppins-400",
    fontSize: 14,
    color: "#000000",
  },
});
