import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";

type Props = {};

const FavoriteEmpty = (props: Props) => {
  Image.prefetch("../assets/images/broken_robot.png");

  return (
    <View style={styles.container}>
      <Text style={styles.header}>There is no favorites yet.</Text>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/broken_robot.png")}
          style={styles.image}
          contentFit="contain"
        />
      </View>
    </View>
  );
};

export default FavoriteEmpty;

const styles = StyleSheet.create({
  container: { alignItems: "center", justifyContent: "center", flex: 1 },
  header: { fontFamily: "Poppins-400", fontSize: 24, marginBottom: 29 },
  imageContainer: { width: 155, height: 135 },
  image: { flex: 1, width: "100%" },
});
