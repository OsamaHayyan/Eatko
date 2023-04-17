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
import useGetMenu, { addFavoriteToMeal } from "../components/hooks/getMenu";
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
  const width = Dimensions.get("window").width;
  const dataFavorite = useAppSelector(({ favorite }) => favorite);
  dataFavorite;
  const menu = useAppSelector(({ menu }) => menu);
  const dispatch = useAppDispatch();
  const { isError, remove } = useGetMenu(categoryName, dataFavorite, dispatch);
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
      return () => {
        dispatch(resetMenu());
        remove();
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

/*

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
import ScreenHeader from "../components/ScreenHeader";
import useGetMenu, {
  addFavoriteToMeal,
} from "../components/common/hooks/getMenu";
import {
  useAppDispatch,
  useAppSelector,
} from "../components/common/hooks/redux";
import {
  FavoriteType,
  addToFavorite,
  removeFromFavorite,
} from "../store/favoriteSlice";
import { useFocusEffect, useIsFocused } from "@react-navigation/native";
import { Image } from "expo-image";
import Loading from "../components/Loading";

type Props = NativeStackScreenProps<RootStackParamList, "Menu">;

const Menu = ({ navigation, route }: Props) => {
  const categoryName = route.params.category;
  const dataFavorite = useAppSelector(({ favorite }) => favorite);
  const [menuData, setMenuData] = useState<FavoriteType[]>();
  const { data, isLoading, isError } = useGetMenu(
    categoryName,
    dataFavorite,
    setMenuData
  );
  const dispatch = useAppDispatch();
  const handleFavorite = (meal: FavoriteType) => {
    if (meal.favorite) {
      dispatch(removeFromFavorite(meal));
    } else {
      dispatch(addToFavorite(meal));
    }
    return setMenuData((preMenu) =>
      preMenu.map((item) => {
        if (item.idMeal === meal.idMeal) {
          return meal;
        }
        return item;
      })
    );
  };

  useFocusEffect(
    useCallback(() => {
      if (menuData) {
        setMenuData(addFavoriteToMeal(menuData, dataFavorite));
      }
    }, [dataFavorite])
  );

  if (isLoading) {
    return <Loading />;
  }

  if (isError || !data) {
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
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{ paddingBottom: 30, paddingLeft: 20 }}
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
        ListHeaderComponent={<ScreenHeader title={`${categoryName} Menu`} />}
        data={menuData}
        renderItem={({ item }) => (
          <MenuItem
            idMeal={item.idMeal}
            strMeal={item.strMeal}
            favorite={item.favorite}
            strMealThumb={item.strMealThumb}
            onPress={handleFavorite}
          />
        )}
        keyExtractor={(item) => item.idMeal}
        numColumns={2}
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
) => {
  const newData = preMenu.map((item) => {
    if (item.idMeal === meal.idMeal) {
      return { ...item, favorite: favorite };
    }
    return item;
  });

  return newData;
};

*/
