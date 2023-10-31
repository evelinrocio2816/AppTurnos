import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerConfirm: {
    width:200,
    borderRadius:25,
    marginLeft:'25%',
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:colors.color5,
  },
  flatlist:{
    margin:20,
  },
  cameraButton:{
    width:200,
    backgroundColor:colors.color1,
  }
});
