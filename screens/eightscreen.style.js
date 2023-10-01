import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
    paddingHorizontal: 30,
    paddingVertical: 50,
    backgroundColor: "#ffffff",
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
    paddingLeft: 45,
    width: "100%",
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
  },
  passwordContainer: {
    position: "relative",
  },
  emailContainer: {
    position: "relative",
  },
  iconUserContainer: {
    position: "absolute",
    left: 17,
    top: 13,
  },
  iconLockContainer: {
    position: "absolute",
    left: 17,
    top: 13,
  },
  iconEyeContainer: {
    position: "absolute",
    right: 15,
    top: 13,
  },
  linkContainer: {
    paddingTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  linkText: {
    color: "#000000",
  },
  socialContainer: {
    paddingTop: 30,
    alignItems: "center",
  },
  socialIconContainer: {
    flexDirection: "row",
    gap: 50,
    paddingTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    paddingTop: 30,
  },
  button: {
    backgroundColor: "#3759f0",
    padding: 12,
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: "600",
    fontSize: 20,
    color: "#ffffff",
  },
});

export default styles;
