import React, { useCallback } from "react";
import { I18nManager, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import Introduction from "./screens/Introduction";
import { StyleSheet } from "react-native";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AppLoading from "./screens/AppLoading";

import Food from "./screens/Food";
import Menu from "./screens/Menu";
import Screens from "./components/TabBottomScreens";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import { Image } from "expo-image";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  I18nManager.forceRTL(false);
  I18nManager.allowRTL(false);
  const queryClient = new QueryClient();
  const [fontsLoaded] = useFonts({
    "Poppins-400": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-900": require("./assets/fonts/Poppins-Black.ttf"),
    "Poppins-700": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-800": require("./assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-200": require("./assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-300": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-500": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-600": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-100": require("./assets/fonts/Poppins-Thin.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  Image.prefetch("./assets/images/loading.gif");
  Image.prefetch("./assets/images/imageLoading.gif");

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar translucent={true} style="dark" />
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer theme={MyTheme}>
            <QueryClientProvider client={queryClient}>
              <Stack.Navigator
                initialRouteName="AppLoading"
                screenOptions={{
                  headerShown: false,
                }}
              >
                <Stack.Screen name="AppLoading" component={AppLoading} />
                <Stack.Screen name="Food" component={Food} />
                <Stack.Screen name="Introduction" component={Introduction} />
                <Stack.Screen name="HomeScreens" component={Screens} />
                <Stack.Screen name="Menu" component={Menu} />
              </Stack.Navigator>
            </QueryClientProvider>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    // paddingTop: 32,
  },
});

export type RootStackParamList = {
  AppLoading: undefined;
  Introduction: undefined;
  HomeScreens: undefined;
  Search: undefined;
  Food: {
    idMeal: string;
  };
  Menu: {
    category?: string;
  };
};

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#FFFFFF",
  },
};
