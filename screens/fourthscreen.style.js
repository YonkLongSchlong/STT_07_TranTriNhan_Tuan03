import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
    paddingHorizontal: 30,
    paddingVertical: 50,
    backgroundColor: "#6ab3d4",
  },
  imgContainer: {
    alignItems: "center",
  },
  headerContainer: {
    alignItems: "center",
    paddingTop: 30,
  },
  mainHeader: {
    fontWeight: "bold",
    fontSize: 70,
  },
  header: {
    fontWeight: "bold",
    fontSize: 25,
  },
  textContainer: {
    paddingTop: 40,
  },
  text: {
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
  },
  boxContainer: {
    paddingTop: 40,
    flexDirection: "row",
    justifyContent: "center",
    columnGap: 10,
  },
  input: {
    height: 50,
    padding: 15,
    borderWidth: 1,
    width: 50,
  },
  buttonContainer: {
    paddingTop: 30,
  },
  button: {
    backgroundColor: "#cbe67a",
    padding: 12,
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default styles;
