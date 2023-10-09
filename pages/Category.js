import { Text, View, TextInput, ScrollView, Image } from "react-native";
import React, { Component } from "react";

export default class Category extends Component {
  render() {
    return (
      <View>
        <TextInput placeholder="Search" />
        <ScrollView>
          <Text>Coleus</Text>
          <Text>Common Yarrow</Text>
          <Text>More</Text>
        </ScrollView>
        <ScrollView>
          <View>
            <Image source={require("../assets/mantis.png")} />
            <Text>Mantis</Text>
          </View>
          <View>
            <Image />
            <Text>Stink Bug</Text>
          </View>
          <View>
            <Image />
            <Text>Ladybugs</Text>
          </View>
          <View>
            <Image />
            <Text>Flowerflies</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
