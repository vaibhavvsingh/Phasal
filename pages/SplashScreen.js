// SplashScreen.js

import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/splash-screen.png")}
        style={styles.image}
      />
      <Text style={styles.title}>PHASAL</Text>
      <Text style={styles.text}>A STEP TOWARDS QUALITY AGRONOMY...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1F2D12",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
    zIndex: -10,
  },
  title: {
    fontFamily: "Roboto",
    fontSize: 60,
    color: "white",
    fontWeight: "700",
  },
  text: {
    fontFamily: "Roboto",
    fontSize: 25,
    color: "white",
    fontWeight: "600",
    marginTop: 20,
    marginHorizontal: 20,
    textAlign: "center",
  },
});

export default SplashScreen;
