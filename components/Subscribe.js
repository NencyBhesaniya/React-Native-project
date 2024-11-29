import { Text, View, StyleSheet, TextInput, ScrollView, Pressable, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import { validateEmail } from '../util/index';

export default function Subscribe() {

  const [email, onChangeEmail] = useState('');
  const isEmailValid = validateEmail(email);

  const validate = () => {
    if (isEmailValid) {
      Alert.alert("Thanks for subscribing, stay tuned!");
    } else {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./little-lemon-logo-grey.png')}
        accessible={true}
        accessibilityLabel="Logo"
      />
      <Text style={styles.title}>
        Subscribe to our NewsLetter for our latest delicious recipes!
      </Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={onChangeEmail}
        placeholder="Type your email"
        keyboardType="email-address"
      />
      <Pressable
        style={styles.buttonWrapper}
        onPress={validate} // Corrected function call
      >
        <Text style={styles.buttonText}>Subscribe</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "white",
  },
  title: {
    color: "#333333",
    textAlign: "center",
    fontSize: 20,
  },
  logo: {
    height: 100,
    width: 300,
    resizeMode: "contain",
    marginBottom: 32,
  },
  input: {
    height: 40,
    marginVertical: 24,
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "#EDEFEE", // Correct hex format
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
  },
});
