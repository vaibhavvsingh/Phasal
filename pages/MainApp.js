import React from "react";
import Home from "./Home";
import Category from "./Category";
import Scanner from "./Scanner";
import Contact from "./Contact";
import Profile from "./Profile";
import BottomBar from "../components/BottomBar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function MainApp() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home" tabBar={(props)=><BottomBar {...props}/>} screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home" component={Home}  />
        <Tab.Screen name="Category" component={Category} />
        <Tab.Screen name="Scanner" component={Scanner} />
        <Tab.Screen name="Contact" component={Contact} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
