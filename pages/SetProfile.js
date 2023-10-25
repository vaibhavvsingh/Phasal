import { Text, View, StyleSheet, TextInput, Pressable, Image, KeyboardAvoidingView, Platform } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react'

export default function SetProfile () {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  // const [image, setImage] = useState('');
  return (
    <View style={styles.container}>
      <Image style={styles.bgImage} source={require('../assets/set-profile.png')} />
      <MaterialCommunityIcons name="pencil-box" size={40} color="#578335" />
      <Text style={styles.title}>Let's get you setup.</Text>
      <View style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20}}>
        <View>
          <Text style={styles.text}>PROFILE IMAGE</Text>
          <Image style={styles.image} />
        </View>
        <Text style={[styles.text, {paddingLeft: 20}]}>Browse Files</Text>
      </View>
      <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={Platform.OS == 'ios' ? 100 : 0} style={styles.inputContainer}>
        <View>
          <Text style={styles.text}>FIRST NAME</Text>
          <TextInput style={styles.input} placeholder='First Name' placeholderTextColor={"#888888"} value={firstName} onChangeText={setFirstName} />
        </View>
        <View>
          <Text style={styles.text}>LAST NAME</Text>
          <TextInput style={styles.input} placeholder='Last Name' placeholderTextColor={"#888888"} value={lastName} onChangeText={setLastName}/>
        </View>
      </KeyboardAvoidingView>
      <Pressable style={styles.button}><Text style={[styles.text, {fontSize: 16}]}>Complete Setup</Text></Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: 'black',
    flex: 1,
    gap: 20
  },
  text: {
    color: "white",
    padding: 5
  },
  title: {
    color: '#666666',
    fontSize: 25, 
    padding: 20
  },
  input: {
    backgroundColor: "white",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 8,
    width: 155
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#578335',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 10,
    padding: 5,
  },
  image: {
    width: 150,
    height: 150,
    backgroundColor: "#ddd",
    borderRadius: 10
  },
  bgImage: {
    position: 'absolute'
  }
})