import { Image, Pressable, Text, View } from "react-native";
import React from "react";
import { styles } from "./Details.styles";
import { Header } from "../../components";
import { useDispatch } from "react-redux";
import  {addItem}  from "../../features/shift/shiftSlice";

const Details = ({ route}) => {
  const {medicos}=route.params
  const dispatch=useDispatch()

  const handleAddShift =()=>{
    dispatch(addItem({...medicos, quantity:1}))
  }
  return (
    <>
      <View style={styles.container}>
        <Header title={"Detalles"} />

        <Image style={styles.image} source={medicos.image} />
        <Text style={styles.nombre}>{medicos.nombre} </Text>
        <Text style={styles.description}>
          {medicos.description}
        </Text>
  <Text style={styles.price}>Consulta: {`$ ${medicos.price}`} </Text>
  <Pressable onPress={handleAddShift}>
    <Text>Confirm Shift</Text>
  </Pressable>
      </View>
    </>
  );
};

export default Details;
