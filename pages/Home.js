import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React, { Component } from "react";
import BottomBar from "../components/BottomBar";

export default class Home extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.title}>Home Page</Text>
          <ScrollView style={{ gap: 10 }}>
            <View style={styles.card}>
              <View style={styles.thumbnail}>
                <Text style={styles.text}>Scanner</Text>
                <Image source={require("../assets/mantis.png")} />
              </View>
              <Text style={[styles.text, { padding: 15 }]}>Details</Text>
            </View>
            <View style={styles.card}>
              <View style={styles.thumbnail}>
                <Text style={styles.text}>Report</Text>
                <Image source={require("../assets/mantis.png")} />
              </View>
              <Text style={[styles.text, { padding: 15 }]}>Details</Text>
            </View>
          </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    width: "100%",
    height: "100%",
    padding: 20,
  },
  title: {
    marginTop: 30,
    fontFamily: "Roboto",
    fontSize: 30,
    color: "white",
    fontWeight: "700",
  },
  card: {
    width: "100%",
    backgroundColor: "#2f2f2f",
    borderRadius: 15,
    marginVertical: 20,
  },
  thumbnail: {
    backgroundColor: "#3f3f3f",
    padding: 15,
    borderRadius: 15,
    width: "100%",
    flexDirection: "row",
  },
  text: {
    fontSize: 18,
    color: "white",
    width: "50%",
    height: 100,
  },
});
