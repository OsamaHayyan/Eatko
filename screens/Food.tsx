import {
  Dimensions,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useCallback, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as Linking from "expo-linking";

import { RootStackParamList } from "../App";
import ScreenHeader from "../components/Ui/ScreenHeader";

import Recipe from "../components/food/Recipe";
import Ingrediants from "../components/food/Ingrediants";
import FavoriteButton from "../components/food/FavoriteButton";
import useGetMeal from "../components/hooks/getMeal";
import { useAppDispatch, useAppSelector } from "../store/redux";
import { addToFavorite, removeFromFavorite } from "../store/favoriteSlice";
import { storeMeal } from "../store/mealSlice";
import Loading from "../components/Ui/Loading";
import { Image } from "expo-image";
import { useFocusEffect } from "@react-navigation/native";

type Props = NativeStackScreenProps<RootStackParamList, "Food">;
const width = Dimensions.get("screen").width;

const Food = ({ navigation, route }: Props) => {
  const { idMeal } = route.params;
  const dispatch = useAppDispatch();
  const meal = useAppSelector(({ meal }) => meal);
  const mealFavorites = useAppSelector(({ favorite }) => favorite);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { isLoading, data, remove } = useGetMeal(
    idMeal,
    mealFavorites,
    dispatch
  );

  const handleFavorite = () => {
    if (meal.favorite) {
      dispatch(
        removeFromFavorite({
          idMeal: data.idMeal,
          strMeal: data.strMeal,
          strMealThumb: data.strMealThumb,
          favorite: false,
        })
      );
      dispatch(storeMeal({ ...meal, favorite: false }));
    } else {
      dispatch(
        addToFavorite({
          idMeal: data.idMeal,
          strMeal: data.strMeal,
          strMealThumb: data.strMealThumb,
          favorite: true,
        })
      );
      dispatch(storeMeal({ ...meal, favorite: true }));
    }
  };

  useFocusEffect(
    useCallback(() => {
      return () => {
        setImageLoaded(false);
        remove();
      };
    }, [navigation])
  );
  if (isLoading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <ImageBackground
          source={{ uri: meal.strMealThumb }}
          style={styles.headerContainer}
          imageStyle={{ width: width }}
          blurRadius={1}
          onLoad={() => setImageLoaded(true)}
        >
          {!imageLoaded && (
            <View
              style={{
                flex: 1,
                position: "absolute",
                right: 0,
                left: 0,
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#FFCBAA",
              }}
            >
              <Image
                source={require("../assets/images/imageLoading.gif")}
                style={[
                  {
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    height: 100,
                    width: 100,
                  },
                ]}
                contentFit="cover"
                contentPosition={"top"}
                transition={100}
              />
            </View>
          )}

          <ScreenHeader
            title={meal.strMeal}
            titleStyle={styles.title}
            style={{ marginHorizontal: 24, marginTop: 20 }}
          />
        </ImageBackground>
        <View style={styles.recipeContainer}>
          <Recipe recipeInstructions={meal.strInstructions} />
          <Ingrediants ingrediants={Object.values(meal).slice(9, 29)} />
        </View>
      </ScrollView>
      <View style={styles.buttonsContainer}>
        <FavoriteButton onPress={handleFavorite} favorite={meal.favorite} />
        <Pressable
          disabled={!meal.strYoutube}
          style={
            meal.strYoutube
              ? styles.videoButtonContainer
              : [styles.videoButtonContainer, { backgroundColor: "#cccccc" }]
          }
          android_ripple={{ color: "#ffffff8a" }}
          onPress={() => Linking.openURL(meal.strYoutube)}
        >
          <Text
            style={
              meal.strYoutube
                ? styles.videoButton
                : [styles.videoButton, { color: "#666666" }]
            }
          >
            Watch Video
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Food;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    width: "100%",
  },
  scrollViewContainer: {
    alignItems: "center",
  },
  headerContainer: {
    flex: 1,
    height: 360,
    width: "100%",
    backgroundColor: "#FFCBAA",
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    opacity: 0.88,
    overflow: "hidden",
  },
  title: {
    fontFamily: "Poppins-700",
    fontSize: 40,
    color: "#000000d4",
    textShadowColor: "#00000029",
    textShadowOffset: { width: -1, height: 2 },
    textShadowRadius: 10,
  },
  image: {
    flex: 1,
  },
  recipeContainer: {
    flex: 1,
    width: width - 54,
    marginTop: 60,
    alignItems: "flex-start",
    gap: 24,
  },

  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 70,
    paddingHorizontal: 30,
  },

  videoButtonContainer: {
    width: 194,
    backgroundColor: "#FFCBAA",
    height: 52,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    elevation: 1,
  },
  videoButton: {
    fontFamily: "Poppins-400",
    fontSize: 14,
    color: "#FF7C2B",
  },
});
