import { Text, View, Image, Pressable, StyleSheet } from "react-native";
import React, { Component } from "react";
import {MaterialCommunityIcons} from '@expo/vector-icons'

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.text, styles.title]}>Profile</Text>
        <View style={[styles.content]}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} />
            <Pressable style={styles.editButton}>
              <MaterialCommunityIcons name="pencil-box" size={40} color="#578335" />
            </Pressable>
          </View>
          <Text style={[styles.text, {alignSelf: 'center', marginBottom: 0}]}>Name</Text>
          <Text style={[styles.text, {alignSelf: 'center', marginTop: 0}]}>Some description</Text>
          <Text style={styles.text}>Account</Text>
          <Text style={styles.text}>Notification</Text>
          <Text style={styles.text}>Help</Text>
          <Pressable >
            <Text style={[styles.text, styles.logoutButton]}>LOGOUT</Text>
          </Pressable>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    padding: 20
  },
  content: {
    flex: 1,
    justifyContent: "center",
    padding: 20
  },
  text: {
    color: "white",
    marginVertical: 8
  },
  title: {
    fontSize: 30,
    marginTop: 30,
    padding: 20,
    zIndex: 10,
    position: 'absolute'

  },
  image: {
    width: 150,
    height: 150,
    backgroundColor: "white",
    borderRadius: 25,
    alignSelf: "center"
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    position: 'relative',
    justifyContent: 'center',
    width: 150,
    alignSelf: 'center'
  },
  editButton: {
    position: 'absolute',
    right: -25
  },
  logoutButton: {
    marginTop: 30, 
    textAlign: 'center',
    backgroundColor: '#578335',
    padding: 8,
    fontSize: 18,
    borderRadius: 5
  }
})