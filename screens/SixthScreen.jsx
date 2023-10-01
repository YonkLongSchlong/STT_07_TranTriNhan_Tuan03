import { View, Text, TouchableOpacity, TextInput, Linking } from "react-native";
import React, { useMemo, useState } from "react";
import styles from "./sixthscreen.style";
import { FontAwesome } from "@expo/vector-icons";
import RadioGroup from "react-native-radio-buttons-group";

export default function SixthScreen() {
  const radioButtons = useMemo(
    () => [
      {
        id: "1",
        label: "Male",
        value: "male",
      },
      {
        id: "2",
        label: "Female",
        value: "female",
      },
    ],
    []
  );

  const [selectedId, setSelectedId] = useState();
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>REGISTER</Text>
      </View>

      <View style={styles.boxContainer}>
        <TextInput style={styles.input} placeholder="Name" />
        <TextInput style={styles.input} placeholder="Phone" />
        <TextInput style={styles.input} placeholder="Email" />
        <View style={styles.passwordContainer}>
          <TextInput style={styles.input} placeholder="Password" />
          <View style={styles.iconContainer}>
            <FontAwesome name="eye" size={24} color="black" />
          </View>
        </View>
        <TextInput style={styles.input} placeholder="Birthday" />
        <View>
          <RadioGroup
            radioButtons={radioButtons}
            onPress={setSelectedId}
            selectedId={selectedId}
            layout="row"
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>REGISTER</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.termContainer}>
        <Text>When you agree to term and conditions</Text>
      </View>
    </View>
  );
}
