import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    marginTop: 10,
    width: 300,
    height: 350,
  },
  nombre: {
    fontSize: 35,
    fontFamily: "RalewayItalic",
  },
  description: {
    fontSize: 20,
    fontFamily: "RalewayRegular",
    marginHorizontal: 30,
  },
  price: {
    fontFamily: "Raleway",
    fontSize: 30,
    color: "green",
  },
  btnConfirm:{
    marginTop: 25,
    width:200,
    height:50,
    backgroundColor: colors.color5,
   paddingHorizontal:45,
   paddingVertical:15,
   borderRadius:20,
   fontFamily:'Raleway'
  }
});
