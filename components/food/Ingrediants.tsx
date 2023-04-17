import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

type Props = {
  ingrediants: string[];
};

const Ingrediants = ({ ingrediants }: Props) => {
  return (
    <View>
      <Text style={styles.ingrediantsHeader}>Ingrediants</Text>
      {ingrediants.map(
        (item, i) =>
          item && (
            <View key={i} style={styles.ingrediantContainer}>
              <Ionicons style={styles.prefixStyle} name="ellipse" size={4} />
              <Text style={styles.ingrediant}>{item}</Text>
            </View>
          )
      )}
    </View>
  );
};

export default Ingrediants;

const styles = StyleSheet.create({
  ingrediantsHeader: {
    fontFamily: "Poppins-600",
    fontSize: 24,
    color: "#000000",
  },
  ingrediant: {
    fontFamily: "Poppins-400",
    fontSize: 14,
    color: "#000000",
  },
  ingrediantContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  prefixStyle: {
    lineHeight: 22,
  },
});
