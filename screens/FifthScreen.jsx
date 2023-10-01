import { View, Text, TouchableOpacity, TextInput, Linking } from "react-native";
import React from "react";
import styles from "./fifthscreen.style";
import { FontAwesome } from "@expo/vector-icons";

export default function FifthScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>LOGIN</Text>
      </View>

      <View style={styles.boxContainer}>
        <TextInput style={styles.input} placeholder="Email" />
        <View style={styles.passwordContainer}>
          <TextInput style={styles.input} placeholder="Password" />
          <View style={styles.iconContainer}>
            <FontAwesome name="eye" size={24} color="black" />
          </View>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.termContainer}>
        <Text>When you agree to term and conditions</Text>
      </View>

      <View style={styles.linkContainer}>
        <Text
          style={styles.linkText}
          onPress={() => {
            Linking.openURL("www.google.com");
          }}
        >
          Forgot your password ?
        </Text>
      </View>

      <View style={styles.socialContainer}>
        <Text>Or login with</Text>
        <View style={styles.socialIconContainer}>
          <FontAwesome name="facebook-official" size={30} color="black" />
          <FontAwesome name="google" size={30} color="black" />
          <FontAwesome name="twitter" size={30} color="black" />
        </View>
      </View>
    </View>
  );
}
