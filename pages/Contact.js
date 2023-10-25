import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Contact () {
  return (
    <View style={styles.container}>
      <Image style={styles.backgroundImage} source={require('../assets/contact.png')} />
      <Text style={[styles.text, styles.button]}>Contact Us</Text>
      <Text style={styles.text}>Details...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    padding: 20
  },
  backgroundImage: {
    position: 'absolute',
    alignSelf: "center"
  },
  button: {
    marginTop: 30, 
    textAlign: 'center',
    backgroundColor: '#578335',
    padding: 8,
    fontSize: 18,
    color: 'black',
    borderRadius: 5
  },
  text: {
    color: "white",
    marginVertical: 10
  }
})