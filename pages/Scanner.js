import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Scanner() {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>Scanner</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: 'black'
  },
  text: {
    color: 'white',
    padding: 5
  },
  title: {
    fontSize: 30,
    fontWeight: '700'
  }
})