import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,

   
  },
  loginContainer: {
    width: "100%",
    paddingHorizontal: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  imagen:{
    width:'50%',
    height:300,

  },
  inputEmail: {
    width: "90%",
    backgroundColor:'#fff',
    height: 50,
    marginVertical: 15,
    borderRadius: 25,
    paddingHorizontal:35,

  },
  loginBoton: {
    backgroundColor: colors.color6,
    width: '50%',
   height:50,
   borderRadius:20,
   justifyContent:'center',
   alignItems:'center',
  },
});
