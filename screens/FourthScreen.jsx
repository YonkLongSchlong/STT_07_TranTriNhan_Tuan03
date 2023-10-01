import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import styles from "./fourthscreen.style";

export default function FourthScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Text style={styles.mainHeader}>CODE</Text>
      </View>

      <View style={styles.headerContainer}>
        <Text style={styles.header}>VERIFICATON</Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Enter online password sent on ++849092605798
        </Text>
      </View>

      <View style={styles.boxContainer}>
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>VERIFY CODE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
