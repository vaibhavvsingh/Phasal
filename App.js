import React, { useState, useEffect } from "react";
import SplashScreen from "./pages/SplashScreen";
import MainApp from "./pages/MainApp";
import { SafeAreaView, Text } from "react-native";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 1000);
  }, []);

  if(showSplash) {
    return <SplashScreen />;
  }
  
  return (
    <SafeAreaView style={{ height: "100%", width: "100%", backgroundColor: "#1F2D12" }}>
      <MainApp />
    </SafeAreaView>
  );
};

export default App;
