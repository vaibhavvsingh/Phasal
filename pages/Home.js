import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import { Pressable } from "react-native";

export default function Home ({navigation}) {
  
  return (
      <View style={styles.container}>
        <Text style={styles.title}>Home Page</Text>
        <ScrollView style={{ gap: 10 }}>
          <Pressable style={styles.card} onPress={()=>{navigation.navigate('Scanner')}}>
            <View style={styles.thumbnail}>
              <Text style={styles.text}>Scanner</Text>
              <Image source={require("../assets/mantis.png")} />
            </View>
            <Text style={[styles.text, { padding: 15 }]}>Details</Text>
          </Pressable>
          <Pressable style={styles.card} onPress={()=>{navigation.navigate('Report')}}>
            <View style={styles.thumbnail}>
              <Text style={styles.text}>Report</Text>
              <Image source={require("../assets/mantis.png")} />
            </View>
            <Text style={[styles.text, { padding: 15 }]}>Details</Text>
          </Pressable>
        </ScrollView>
      </View>
  );
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
