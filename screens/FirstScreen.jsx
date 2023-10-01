import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "./firstscreen.style";

export default function FirstScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <FontAwesome5 name="circle" size={160} style={styles.img} />
      </View>

      <View style={styles.headerContainer}>
        <Text style={styles.textHeader}>GROW</Text>
        <Text style={styles.textHeader}>YOUR BUSINESS</Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.text}>
          We will help you to grow your business using online server
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={{ fontWeight: "bold" }}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={{ fontWeight: "bold" }}>SIGNUP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
