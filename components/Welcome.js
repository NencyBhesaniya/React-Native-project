import { ScrollView, View, Text, StyleSheet, Image, Pressable } from 'react-native';
import React, { useState } from 'react';

export default function Welcome({navigation}){

  return(
    <ScrollView style={styles.container}>
    <View style={styles.contentContainer}>
    <Image 
    style={styles.logo}
    source={require('./little-lemon-logo.png')}
    accessible={true}
    accessibilityLabel="Logo"
    />
    <Text style={styles.title}>
    LittleLemon, your local Mediterranean Bistro 
    </Text>
    <Pressable
    style={styles.buttonWrapper}
    onPress={ () => navigation.navigate('Subscribe')}>
    <Text style={styles.buttonText}> NewsLetter </Text>
    </Pressable>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 200,
    width: 300,
    resizeMode: "contain",
  },
  title: {
    marginTop: 48,
    paddingVertical: 10,
    color: "#333333",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },

  buttonWrapper: {
    borderRadius: 8,
    backgroundColor: '#495E57',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 8,
  },

  buttonText: {
    fontSize: 16,
    color: 'white',
  }
});