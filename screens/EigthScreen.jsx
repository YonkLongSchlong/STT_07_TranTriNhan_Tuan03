import { View, Text, TouchableOpacity, TextInput, Linking } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./eightscreen.style";

export default function EigthScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <FontAwesome name="user-circle-o" size={100} color="black" />
      </View>

      <View style={styles.boxContainer}>
        <View style={styles.emailContainer}>
          <TextInput style={styles.input} placeholder="Email" />
          <View style={styles.iconUserContainer}>
            <FontAwesome name="user" size={24} color="black" />
          </View>
        </View>
        <View style={styles.passwordContainer}>
          <TextInput style={styles.input} placeholder="Password" />
          <View style={styles.iconEyeContainer}>
            <FontAwesome name="eye" size={24} color="black" />
          </View>
          <View style={styles.iconLockContainer}>
            <FontAwesome name="lock" size={24} color="black" />
          </View>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.linkContainer}>
        <Text style={styles.linkText}>Register</Text>
        <Text
          style={styles.linkText}
          onPress={() => {
            Linking.openURL("www.google.com");
          }}
        >
          Forgot your password
        </Text>
      </View>

      <View style={styles.socialContainer}>
        <Text>-------------- Other method login --------------</Text>
        <View style={styles.socialIconContainer}>
          <FontAwesome name="facebook-official" size={50} color="black" />
          <FontAwesome name="google" size={50} color="black" />
          <FontAwesome name="twitter" size={50} color="black" />
        </View>
      </View>
    </View>
  );
}
