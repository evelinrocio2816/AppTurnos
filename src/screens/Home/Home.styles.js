import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";
export const styles = StyleSheet.create({
  containerTitle: {
    paddingTop: 20,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  textTitle: {
    fontFamily: "RalewayItalic",
    fontSize: 20,
  },

  containerText: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 150,
    borderWidth: 2,
    borderColor:'white',
    borderRadius: 500,
    backgroundColor: colors.color1,
    marginHorizontal: "10%",
  },
  containerTextI: {
    justifyContent: "center",
    alignItems: "center",
    width: 250,
    height: 250,
    borderWidth: 2,
    borderColor:'white',
    borderRadius: 500,
    backgroundColor: colors.color3,
    marginHorizontal: "25%",
  },
  containerTextII: {
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 200,
    borderWidth: 2,
    borderRadius: 500,
    backgroundColor: colors.color5,
    marginHorizontal: "55%",
  },
  containerTextIII: {
    justifyContent: "center",
    alignItems: "center",
    width: 180,
    height: 180,
    borderWidth: 2,
    borderColor:'white',
    borderRadius: 500,
    backgroundColor: colors.color4,
    marginHorizontal: "20%",
  },
  containerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 15,
    fontFamily: "RalewayItalic",
    color: "#fff",
  },
});
