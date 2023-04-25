import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import React from "react";
import { Path, Svg } from "react-native-svg";
type Props = {
  favorite: boolean;
  onPress: (event?: GestureResponderEvent) => void;
};

const FavoriteButton = ({ onPress, favorite }: Props) => {
  const handleFavorite = (e: GestureResponderEvent) => {
    onPress(e);
  };
  return (
    <View style={styles.favoritContainer}>
      <Pressable
        style={styles.favoriteButtonContainer}
        android_ripple={{ color: "#FFCBAA" }}
        onPress={handleFavorite}
      >
        {favorite ? (
          <Svg width="24" height="20" viewBox="0 0 24 20" fill="none">
            <Path
              d="M24 6.45986C24 13.7532 12.8796 19.6567 12.4061 19.9005C12.2813 19.9658 12.1417 20 12 20C11.8583 20 11.7187 19.9658 11.5939 19.9005C11.1204 19.6567 0 13.7532 0 6.45986C0.00198508 4.74719 0.702493 3.10522 1.94784 1.89418C3.19319 0.683141 4.88167 0.00193039 6.64286 0C8.85536 0 10.7925 0.925218 12 2.48913C13.2075 0.925218 15.1446 0 17.3571 0C19.1183 0.00193039 20.8068 0.683141 22.0522 1.89418C23.2975 3.10522 23.998 4.74719 24 6.45986Z"
              fill="#FF7C2B"
            />
          </Svg>
        ) : (
          <Svg width="24" height="20" viewBox="0 0 24 20" fill="none">
            <Path
              d="M17.5556 0C15.1733 0 13.12 1.10761 12 2.94239C10.88 1.10761 8.82667 0 6.44444 0C4.7359 0.00201356 3.09793 0.666866 1.88981 1.84872C0.681686 3.03058 0.00205831 4.63295 0 6.30435C0 9.41195 2 12.6598 5.93333 15.9554C7.74945 17.4673 9.71038 18.8043 11.7889 19.9478C11.8537 19.9821 11.9263 20 12 20C12.0737 20 12.1463 19.9821 12.2111 19.9478C14.2896 18.8043 16.2506 17.4673 18.0667 15.9554C22 12.6598 24 9.41195 24 6.30435C23.9979 4.63295 23.3183 3.03058 22.1102 1.84872C20.9021 0.666866 19.2641 0.00201356 17.5556 0ZM12 19.0674C10.4444 18.2022 0.888889 12.6163 0.888889 6.30435C0.890653 4.86348 1.47654 3.48213 2.51802 2.46328C3.55951 1.44444 4.97156 0.871291 6.44444 0.869565C8.79 0.869565 10.7611 2.09891 11.5889 4.07717C11.6224 4.15692 11.6793 4.22512 11.7525 4.27312C11.8257 4.32112 11.9119 4.34675 12 4.34675C12.0881 4.34675 12.1743 4.32112 12.2475 4.27312C12.3207 4.22512 12.3776 4.15692 12.4111 4.07717C13.2389 2.09891 15.21 0.869565 17.5556 0.869565C19.0284 0.871291 20.4405 1.44444 21.482 2.46328C22.5235 3.48213 23.1093 4.86348 23.1111 6.30435C23.1111 12.6087 13.5556 18.2022 12 19.0674Z"
              fill="black"
            />
          </Svg>
        )}
      </Pressable>
    </View>
  );
};

export default FavoriteButton;

const styles = StyleSheet.create({
  favoritContainer: {
    borderWidth: 0.5,
    borderRadius: 20,
    borderColor: "#000000",
    borderStyle: "solid",
    backgroundColor: "#ffffff",
    elevation: 1,
    overflow: "hidden",
  },
  favoriteButtonContainer: {
    height: 52,
    width: 56,
    alignItems: "center",
    justifyContent: "center",
  },
});
