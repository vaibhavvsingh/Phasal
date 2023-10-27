import React from "react";
import Home from "./Home";
import Category from "./Category";
import Scanner from "./Scanner";
import Contact from "./Contact";
import Profile from "./Profile";
import SetProfile from "./SetProfile";
import Report from "./Report";
import BottomBar from "../components/BottomBar";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function MainApp() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Tab.Navigator initialRouteName="HomeRoutes" tabBar={(props)=><BottomBar {...props}/>} screenOptions={{headerShown: false}}>
        <Tab.Screen name="HomeRoutes" component={HomeRoutes}  />
        <Tab.Screen name="CategoryRoutes" component={CategoryRoutes} />
        <Tab.Screen name="Scanner" component={Scanner} />
        <Tab.Screen name="Contact" component={Contact} />
        <Tab.Screen name="ProfileRoutes" component={ProfileRoutes} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function HomeRoutes() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Scanner" component={Scanner} />
      <Stack.Screen name="Report" component={Report} />
    </Stack.Navigator>
  )
}
function CategoryRoutes() {
  return (
    <Stack.Navigator initialRouteName="Category" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name="Report" component={Report} />
    </Stack.Navigator>
  )
}
function ProfileRoutes() {
  return (
    <Stack.Navigator initialRouteName="Profile" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="SetProfile" component={SetProfile} />
    </Stack.Navigator>
  )
}