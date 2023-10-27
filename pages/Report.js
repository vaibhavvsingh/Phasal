import { Text, View, Image, StyleSheet } from "react-native";
import React from "react";

export default function Report () {
  return (<View style={styles.wrapperContainer}>
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={require('../assets/mantis.png')} />
    </View>
      <Text style={[styles.text,styles.title]}>Details</Text>
      <Text style={[styles.text, {textAlign: 'center',margin:10,fontSize: 18}]} >Mantis</Text>
    <View style={styles.container}>
      <Text style={styles.text}>Report</Text>
      <Text style={styles.text}>Example Report</Text>
      <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapperContainer: {
    backgroundColor: "black",
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    gap: 10
  },
  text:{
    color: "white",
  },
  title: {
    marginTop: 40,
    fontSize: 30,
    padding: 20,
    position:'absolute',
    zIndex: 10
  },
  imageContainer:{
    display: "flex",
    alignItems: "center",
    borderRadius: 20,
    overflow:'hidden',
  },
  image:{
    width: "100%",
    height: 350
  }
})
