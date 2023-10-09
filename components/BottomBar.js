import { Text, View, StyleSheet } from "react-native";
import React, { Component } from "react";
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";

export default class BottomBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <Feather name="home" size={30} color="white" />
          <Feather name="grid" size={24} color="white" />
        </View>
        <View style={{ position: "relative" }}>
          <View
            style={[
              styles.item,
              {
                position: "absolute",
                bottom: 0,
                left: -25,
                backgroundColor: "#75e00a",
                padding: 15,
                borderRadius: 40,
              },
            ]}
          >
            <MaterialIcons name="add-photo-alternate" size={30} color="black" />
          </View>
        </View>
        <View style={styles.item}>
          <Ionicons name="mail" size={30} color="white" />
          <Feather name="user" size={30} color="white" />
        </View>
      </View>
    );
  }
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
});
