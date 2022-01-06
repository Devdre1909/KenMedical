import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import {
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";

import { Lato_300Light, Lato_400Regular, Lato_700Bold, Lato_900Black } from '@expo-google-fonts/lato'

import { useFonts } from 'expo-font'

export default function App() {
  let [fontLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
    Lato_300Light,
    Lato_400Regular,
    Lato_700Bold,
    Lato_900Black
  });

  if (!fontLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={{
          fontFamily: "DMSans_500Medium",
        }}>Open up App.js to start working on your app!</Text>
        <Text style={{
          fontFamily: "Lato_700Bold",
        }}>Setup fonts!!!!</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
