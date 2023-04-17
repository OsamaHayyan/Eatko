import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Path, Svg } from "react-native-svg";

import Home from "../screens/Home";
import Favorite from "../screens/Favorite";
import Search from "../screens/Search";
const Tab = createBottomTabNavigator<RootTapParamList>();

const Screens = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { height: 66 },
        headerShown: false,
        tabBarActiveTintColor: "#FF7C2B",
        tabBarInactiveTintColor: "#000000",
        tabBarIconStyle: { position: "absolute", top: 27 },
        tabBarLabel: ({ focused }) => {
          if (!focused) return null;
          return (
            <Svg width="59" height="15" viewBox="0 0 59 15" fill="none">
              <Path
                d="M29.7 0.00805657C22.6936 -0.293677 12.0959 7.95374 6.97625 12.3412C5.02752 14.0113 2.57048 14.9989 0.00416565 15H58.4126C55.896 14.9989 53.4824 14.0495 51.5574 12.4282C46.5596 8.2187 36.3123 0.29282 29.7 0.00805657Z"
                fill="#FF7C2B"
              />
            </Svg>
          );
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          // headerShown: true,
          // headerStyle: { height: 51, backgroundColor: "transparent" },
          // headerTransparent: true,
          // title: null,
          // headerShadowVisible: false,
          tabBarIcon: ({ color, size }) => (
            <Svg width={size} height={size} viewBox="0 0 28 26" fill="none">
              <Path
                d="M1 14.5L14 1L27 14.5M3.88889 16V22C3.88889 22.7956 4.19325 23.5587 4.73502 24.1213C5.2768 24.6839 6.0116 25 6.77778 25H21.2222C21.9884 25 22.7232 24.6839 23.265 24.1213C23.8067 23.5587 24.1111 22.7956 24.1111 22V16"
                stroke={color}
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </Svg>
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Svg width={size} height={size} viewBox="0 0 24 20" fill="none">
              <Path
                d="M17.5556 0C15.1733 0 13.12 1.10761 12 2.94239C10.88 1.10761 8.82667 0 6.44444 0C4.7359 0.00201356 3.09793 0.666866 1.88981 1.84872C0.681686 3.03058 0.00205831 4.63295 0 6.30435C0 9.41195 2 12.6598 5.93333 15.9554C7.74945 17.4673 9.71038 18.8043 11.7889 19.9478C11.8537 19.9821 11.9263 20 12 20C12.0737 20 12.1463 19.9821 12.2111 19.9478C14.2896 18.8043 16.2506 17.4673 18.0667 15.9554C22 12.6598 24 9.41195 24 6.30435C23.9979 4.63295 23.3183 3.03058 22.1102 1.84872C20.9021 0.666866 19.2641 0.00201356 17.5556 0ZM12 19.0674C10.4444 18.2022 0.888889 12.6163 0.888889 6.30435C0.890653 4.86348 1.47654 3.48213 2.51802 2.46328C3.55951 1.44444 4.97156 0.871291 6.44444 0.869565C8.79 0.869565 10.7611 2.09891 11.5889 4.07717C11.6224 4.15692 11.6793 4.22512 11.7525 4.27312C11.8257 4.32112 11.9119 4.34675 12 4.34675C12.0881 4.34675 12.1743 4.32112 12.2475 4.27312C12.3207 4.22512 12.3776 4.15692 12.4111 4.07717C13.2389 2.09891 15.21 0.869565 17.5556 0.869565C19.0284 0.871291 20.4405 1.44444 21.482 2.46328C22.5235 3.48213 23.1093 4.86348 23.1111 6.30435C23.1111 12.6087 13.5556 18.2022 12 19.0674Z"
                fill={color}
              />
            </Svg>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <Path
                d="M16.92 17.7904C17.38 18.2504 18.09 17.5404 17.63 17.0904L13.88 13.3304C15.1954 11.8749 15.9226 9.98226 15.92 8.02043C15.92 3.63043 12.35 0.0604248 7.96 0.0604248C3.57 0.0604248 0 3.63043 0 8.02043C0 12.4104 3.57 15.9804 7.96 15.9804C9.94 15.9804 11.77 15.2504 13.17 14.0404L16.92 17.7904ZM0.999 8.02043C0.999 4.18043 4.129 1.06042 7.959 1.06042C11.799 1.06042 14.919 4.18043 14.919 8.02043C14.919 11.8604 11.799 14.9804 7.959 14.9804C4.129 14.9804 0.999 11.8604 0.999 8.02043Z"
                fill="black"
              />
            </Svg>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export type RootTapParamList = {
  Home: undefined;
  Favorite: undefined;
  Search: undefined;
};

export default Screens;
