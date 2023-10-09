import { Text, View, Image, Pressable } from "react-native";
import React, { Component } from "react";

export default class Profile extends Component {
  render() {
    return (
      <View>
        <Text>Profile</Text>
        <View>
          <Image />
          <Pressable>
            <Text>LOGOUT</Text>
          </Pressable>
        </View>
        <Text>Name</Text>
        <Text>Account</Text>
        <Text>Notification</Text>
        <Text>Help</Text>
        <Pressable>
          <Text>LOGOUT</Text>
        </Pressable>
      </View>
    );
  }
}
