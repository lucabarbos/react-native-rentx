import React, { useCallback, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";
import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from "@expo-google-fonts/archivo";

import { Home } from "./src/screens/Home";

import theme from "./src/styles/theme";
import { View } from "react-native";
import { CarDetails } from "./src/screens/CarDetails";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <View
        onLayout={onLayoutRootView}
        style={{
          flex: 1,
        }}
      >
        {/* <Home /> */}
        <CarDetails />
      </View>
    </ThemeProvider>
  );
}
