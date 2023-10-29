import { StyleSheet } from "react-native";
import { colors } from "../../../global/colors";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:8,
        borderWidth:1, 
        borderBottomColor: colors.color6,
        marginHorizontal:25,
        marginTop:15,
    },
    name: {
        fontSize:20,
    },
    details:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems:'center',
        justifyContent:'space-between',
      

    }
})