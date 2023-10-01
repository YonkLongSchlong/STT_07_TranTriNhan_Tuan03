import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons, Fontisto } from "@expo/vector-icons";
import styles from "./thirdscreen.style";

export default function ThirdScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <MaterialCommunityIcons name="lock" size={160} color="black" />
      </View>

      <View style={styles.headerContainer}>
        <Text style={styles.header}>FORGET</Text>
        <Text style={styles.header}>PASSWORD</Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Provide your account's email for thich you want to reset your password
        </Text>
      </View>

      <View style={styles.boxContainer}>
        <TouchableOpacity style={styles.box}>
          <Fontisto name="email" size={30} color="black" />
          <Text style={{ fontSize: 18 }}>Email</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
