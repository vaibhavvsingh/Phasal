import React, { useState, useEffect } from "react";
import SplashScreen from "./pages/SplashScreen";
import MainApp from "./pages/MainApp";
import { View, Text } from "react-native";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 2000);
  }, []);

  return (
    <View style={{ height: "100%", width: "100%", backgroundColor: "#1F2D12" }}>
      {showSplash ? <SplashScreen /> : <MainApp />}
    </View>
  );
};

export default App;
