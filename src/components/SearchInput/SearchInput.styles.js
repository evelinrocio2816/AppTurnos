import { StyleSheet } from "react-native"
import { colors } from "../../global/colors"


export default styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    marginTop:40,
    width:'70%',
    backgroundColor:colors.color1,
    padding:10,
    borderRadius:25,
    marginHorizontal:35,
  },
  Input:{
    fontSize:20,
    backgroundColor:'#fff',
    padding:15,
    borderRadius:20,
    width:'80%',
  }
})