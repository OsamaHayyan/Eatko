import { StyleSheet, Text } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import MenuItem from "../components/MenuItem";
import { useAppSelector } from "../store/redux";
import { useDispatch } from "react-redux";
import { FavoriteType, removeFromFavorite } from "../store/favoriteSlice";
import FavoriteEmpty from "../components/FavoriteEmpty";
import AnimatedView from "../components/Ui/AnimatedView";
import List from "../components/Ui/List";

type Props = NativeStackScreenProps<RootStackParamList, "Menu">;

const Favorite = ({ navigation, route }: Props) => {
  const dispatch = useDispatch();
  const data = useAppSelector(({ favorite }) => favorite);

  const handleFavorite = (meal: FavoriteType) => {
    dispatch(removeFromFavorite(meal));
  };

  if (!data || data?.length === 0) {
    return (
      <AnimatedView style={styles.animatedStyle}>
        <FavoriteEmpty />
      </AnimatedView>
    );
  }

  return (
    <AnimatedView style={[styles.container]}>
      <List
        data={data}
        headerTitle={<Text style={styles.header}>Favorite</Text>}
        renderItem={({ item }) => (
          <MenuItem {...item} onPress={handleFavorite} />
        )}
      />
    </AnimatedView>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
  },
  header: {
    fontFamily: "Poppins-600",
    fontSize: 30,
  },
  animatedStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
