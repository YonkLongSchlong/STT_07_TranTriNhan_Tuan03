import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingVertical: 100,
    backgroundColor: "#0390fc",
  },
  imgContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  headerContainer: {
    alignItems: "center",
    paddingVertical: 30,
  },
  textHeader: {
    fontSize: 30,
    fontWeight: "bold",
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  text: {
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 30,
  },
  button: {
    padding: 15,
    paddingHorizontal: 40,
    backgroundColor: "#e7fc03",
    color: "#ffffff",
    borderRadius: 10,
  },
  linkContainer: {
    paddingTop: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
