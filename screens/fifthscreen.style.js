import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
    paddingHorizontal: 30,
    paddingVertical: 50,
    backgroundColor: "#cfd6a5",
  },
  headerContainer: {
    alignItems: "center",
    paddingTop: 30,
  },
  header: {
    fontWeight: "bold",
    fontSize: 25,
  },
  textContainer: {
    paddingTop: 40,
  },
  boxContainer: {
    paddingTop: 40,
    flexDirection: "column",
    justifyContent: "center",
    gap: 20,
  },
  input: {
    height: 50,
    padding: 15,
    width: "100%",
    backgroundColor: "#d8dbc1",
  },
  passwordContainer: {
    position: "relative",
  },
  iconContainer: {
    position: "absolute",
    right: 15,
    top: 13,
  },
  termContainer: {
    paddingTop: 15,
    alignItems: "center",
  },
  linkContainer: {
    paddingTop: 15,
    alignItems: "center",
  },
  linkText: {
    color: "#9587c7",
  },
  socialContainer: {
    paddingTop: 15,
    alignItems: "center",
  },
  socialIconContainer: {
    flexDirection: "row",
    gap: 25,
    paddingTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    paddingTop: 30,
  },
  button: {
    backgroundColor: "#d19584",
    padding: 12,
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "600",
    fontSize: 20,
    color: "#ffffff",
  },
});

export default styles;
