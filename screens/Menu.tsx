import {
  Alert,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import MenuItem from "../components/MenuItem";
import ScreenHeader from "../components/Ui/ScreenHeader";
import useGetMenu from "../components/hooks/getMenu";
import { useAppDispatch, useAppSelector } from "../components/hooks/redux";
import {
  FavoriteType,
  addToFavorite,
  removeFromFavorite,
} from "../store/favoriteSlice";
import { useFocusEffect } from "@react-navigation/native";
import Loading from "../components/Ui/Loading";
import { resetMenu, storeMenu } from "../store/menuSlice";
import List from "../components/Ui/List";

type Props = NativeStackScreenProps<RootStackParamList, "Menu">;

const Menu = ({ navigation, route }: Props) => {
  const categoryName = route.params.category;
  const dataFavorite = useAppSelector(({ favorite }) => favorite);
  dataFavorite;
  const menu = useAppSelector(({ menu }) => menu);
  const dispatch = useAppDispatch();
  const { isError, refetch } = useGetMenu(categoryName, dataFavorite, dispatch);
  const handleFavorite = async (meal: FavoriteType) => {
    let newMenu: FavoriteType[] = [];
    if (meal.favorite) {
      newMenu = filterMenu(menu, meal, false);
      dispatch(removeFromFavorite(meal));
    } else {
      newMenu = filterMenu(menu, meal, true);
      dispatch(addToFavorite(meal));
    }
    dispatch(storeMenu(newMenu));
  };

  useFocusEffect(
    useCallback(() => {
      refetch();
      return () => {
        dispatch(resetMenu());
      };
    }, [navigation])
  );

  if (menu.length === 0) {
    return <Loading />;
  }

  if (isError) {
    Alert.alert("Error", "Menu not found", [
      {
        text: "OK",
        style: "destructive",
      },
    ]);
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>error was happend</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <List
        data={menu}
        headerTitle={<ScreenHeader title={`${categoryName} Menu`} />}
        renderItem={({ item }) => (
          <MenuItem {...item} onPress={handleFavorite} />
        )}
      />
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
  },
});

const filterMenu = (
  preMenu: FavoriteType[],
  meal: FavoriteType,
  favorite: boolean
): FavoriteType[] => {
  let newData: FavoriteType[] = [];

  preMenu.forEach((item, i) => {
    if (item.idMeal === meal.idMeal) {
      newData.push({ ...meal, favorite: favorite });
    } else {
      newData.push(item);
    }
  });
  return newData;
};
