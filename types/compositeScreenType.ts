import { RootStackParamList } from "../App";
import type {
  CompositeNavigationProp,
  CompositeScreenProps,
} from "@react-navigation/native";
import type {
  BottomTabNavigationProp,
  BottomTabScreenProps,
} from "@react-navigation/bottom-tabs";
import type {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { RootTapParamList } from "../components/TabBottomScreens";

export type CompositeScreenHomeType = CompositeNavigationProp<
  BottomTabNavigationProp<RootTapParamList, "Home">,
  NativeStackNavigationProp<RootStackParamList>
>;
export type CompositeScreenFavoriteType = CompositeNavigationProp<
  BottomTabNavigationProp<RootTapParamList, "Favorite">,
  NativeStackNavigationProp<RootStackParamList>
>;
export type CompositeScreenSearchType = CompositeNavigationProp<
  BottomTabNavigationProp<RootTapParamList, "Search">,
  NativeStackNavigationProp<RootStackParamList>
>;
export type CompositeScreenMenuType = CompositeNavigationProp<
  NativeStackNavigationProp<RootStackParamList, "Menu">,
  BottomTabNavigationProp<RootTapParamList>
>;

export type CompositeScreenFoodType = CompositeNavigationProp<
  NativeStackNavigationProp<RootStackParamList, "Food">,
  BottomTabNavigationProp<RootTapParamList>
>;
