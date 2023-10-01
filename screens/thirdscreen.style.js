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
  header: {
    fontWeight: "bold",
    fontSize: 30,
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
  },
  box: {
    flexDirection: "row",
    columnGap: 20,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#a2b4bd",
    paddingVertical: 12,
    paddingLeft: 20,
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
