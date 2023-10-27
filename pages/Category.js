import { Text, View, TextInput, ScrollView, Image, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";

const Category = ({navigation}) => {
  const [search, setSearch] = useState('');
  
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Search" placeholderTextColor={"#fff"} value={search} onChangeText={setSearch} />
        <View style={styles.plantTab}>
          <ScrollView horizontal={true}>
            <Text style={styles.plantTabItemText}>Coleus</Text>
            <Text style={styles.plantTabItemText}>Common Yarrow</Text>
            <Text style={styles.plantTabItemText}>More</Text>
          </ScrollView>
        </View>
        <ScrollView contentContainerStyle={styles.insectList}>
          {[1,1,1,1,1,1,1,1,1].map((item,index)=>(
            <Pressable key={index} onPress={()=>{navigation.navigate('Report')}}>
              <Image source={require("../assets/mantis.png")} />
              <Text style={styles.imageText}>Mantis</Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    backgroundColor: "black",
    width: "100%",
    height: "100%",
    padding: 20,
  },
  input: {
    color: "white",
    borderColor: "#999",
    borderWidth:2,
    marginTop: 40,
    paddingHorizontal:15,
    paddingVertical:5,
    borderRadius:5
  },
  plantTab: {
    marginVertical: 15,
    height: "auto"
  },
  plantTabItemText:{
    color: "white",
    backgroundColor: "gray",
    marginRight: 10,
    paddingVertical:5,
    paddingHorizontal: 15,
    borderRadius: 10
  },
  insectList: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'center',
    flexWrap:"wrap",
    gap: 20,
    paddingBottom: 70,
    marginHorizontal: 'auto'
  },
  imageText:{
    backgroundColor: 'gray',
    color: "white",
    padding: 10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius: 10
  },
})

export default Category;