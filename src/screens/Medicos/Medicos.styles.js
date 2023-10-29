import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";
import {fonts} from "../../global/fonts";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  listContainer: {
    flex: 1,
    paddingTop: 20,
   margin:25,
  
  },
  listContainerMedico: {
    padding: 20,
    borderWidth: 1,
    margin: 10,
    backgroundColor:colors.color5,
    borderRadius:15,
  },
  text:{
    fontFamily:'Raleway',
    color: colors.color1,
    fontSize:20,
  }
});
