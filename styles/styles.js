import { StyleSheet } from "react-native";
import { StatusBar } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#0f0f0f",
  },
  header: {
    backgroundColor: "#272727",
    padding: 15,
    borderBottomWidth: 2,
    borderBottomColor: "#00ff43",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 5,
  },
  headerText: {
    color: "#ecf0f1",
    fontSize: 25,
    textAlign: "center",
    fontFamily: "Montserrat_400Regular",
  },
  icon: {
    color: "#f1f1f1",
  },
  setup: {
    color: "#f1f1f1",
    padding: 30,
    display: "flex",
    gap: 5,
  },
  input: {
    color: "#f1f1f1",
    padding: 10,
    backgroundColor: "#121212",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#29292a",
    width: "50%",
  },
  title: {
    color: "#f1f1f1",
    fontFamily: "Montserrat_400Regular",
    fontSize: 20,
  },
  text: {
    color: "#f1f1f1",
    fontFamily: "Montserrat_400Regular",
    fontSize: 14,
  },
  mainButton: {
    color: "#f1f1f1",
    backgroundColor: "#29292a",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#29292a",
    borderWidth: 1,
    borderColor: "#545459",
  },

  buttonText: {
    color: "#f1f1f1",
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Montserrat_400Regular",
  },
  helperButton: {
    color: "#f1f1f1",
    backgroundColor: "#29292a",
    padding: 10,
    borderRadius: 50,
    minWidth: 120,
    fontSize: 10,
    borderWidth: 1,
    borderColor: "#545459",
  },
  helperButtonDisabled: {
    color: "#f1f1f1",
    backgroundColor: "#121212",
    padding: 10,
    borderRadius: 50,
    minWidth: 120,
    fontSize: 10,
    borderWidth: 1,
    borderColor: "#29292a",
  },
  buttonWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    justifyContent: "space-between",
    marginBottom: 10,
    marginTop: 10,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    justifyContent: "space-between",
  },
  rowStyled: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#29292a",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    justifyContent: "space-between",
  },
});

export { styles };
