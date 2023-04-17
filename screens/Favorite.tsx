import {
  Alert,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import MenuItem from "../components/MenuItem";
import { useAppSelector } from "../components/hooks/redux";
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
      {/* <FlatList
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
          flex: 1,
          marginBottom: 16,
          gap: 16,
          paddingBottom: 24,
          paddingHorizontal: 20,
        }}
        contentContainerStyle={{
          flexGrow: 1,
        }}
        ListHeaderComponent={() => }
        data={data}
        renderItem={({ item }) => (
          <MenuItem
            idMeal={item.idMeal}
            strMeal={item.strMeal}
            strMealThumb={item.strMealThumb}
            favorite={item.favorite}
            onPress={handleFavorite}
          />
        )}
        keyExtractor={(item) => item.idMeal}
        numColumns={2}
      /> */}
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
    // marginBottom: 30,
    // marginTop: 25,
    // paddingLeft: 20,
  },
  animatedStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
