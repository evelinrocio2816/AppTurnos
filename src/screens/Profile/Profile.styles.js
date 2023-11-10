import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    },
    imagenProfile:{
    
        justifyContent:'center',
        width:200,
        height:200,
        marginHorizontal:'30%',
        marginBottom:20,
        borderRadius:95,
        borderColor: colors.color6,
        borderWidth: 2
    },
    cameraButton:{
        marginTop:10,
        backgroundColor:colors.color1,
        height:50,
        width:300,
        marginHorizontal:'20%',
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center'
    }
})