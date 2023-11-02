import { StyleSheet } from "react-native"
import { colors } from "../../global/colors"



export default styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
  },
  mapImage:{
    width: 400,
    height: 450,
    borderColor:colors.color6,
    borderWidth:2,
    borderRadius:20,
  }
})