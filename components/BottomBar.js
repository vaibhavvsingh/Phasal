import { View, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function BottomBar({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Pressable onPress={()=>{navigation.navigate('Home')}}><Feather name="home" size={30} color="white" /></Pressable>
        <Pressable onPress={()=>{navigation.navigate('Category')}}><Feather name="grid" size={24} color="white" /></Pressable>
      </View>
      <View style={{ position: "relative" }}>
        <Pressable onPress={()=>{navigation.navigate('Scanner')}} style={[styles.item, styles.scannerBtn]}>
          <MaterialIcons name="add-photo-alternate" size={30} color="black" />
        </Pressable>
      </View>
      <View style={styles.item}>
        <Pressable onPress={()=>{navigation.navigate('Contact')}}><Ionicons name="mail" size={30} color="white" /></Pressable>
        <Pressable onPress={()=>{navigation.navigate('Profile')}}><Feather name="user" size={30} color="white" /></Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#2f2f2f",
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 20,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    gap: 50,
  },
  scannerBtn: {
    position: "absolute",
    bottom: 0,
    left: -25,
    backgroundColor: "#75e00a",
    padding: 15,
    borderRadius: 40,
  },
});
