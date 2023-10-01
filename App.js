import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  FirstScreen,
  SecondScreen,
  ThirdScreen,
  FourthScreen,
  FifthScreen,
  SixthScreen,
  SeventhScreen,
  EigthScreen,
} from "./screens";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <FirstScreen /> */}
      {/* <SecondScreen /> */}
      {/* <ThirdScreen /> */}
      {/* <FourthScreen /> */}
      {/* <FifthScreen /> */}
      {/* <SixthScreen /> */}
      {/* <SeventhScreen /> */}
      {/* <EigthScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
