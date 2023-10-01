import { View, Text, TouchableOpacity, TextInput, Linking } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./seventhscreen.style";

export default function SeventhScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>LOGIN</Text>
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

      <View style={styles.registerContainer}>
        <Text
          onPress={() => {
            Linking.openURL("www.google.com");
          }}
          style={styles.registerText}
        >
          CREATE ACCOUNT
        </Text>
      </View>
    </View>
  );
}
