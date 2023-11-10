import { Image, TouchableOpacity, Text, View } from "react-native";
import React from "react";
import { styles } from "./Details.styles";
import { Header } from "../../components";
import { useDispatch } from "react-redux";
import { addItem } from "../../features/shift/shiftSlice";
import { ScrollView } from "react-native";

const Details = ({ route}) => {
  const { medicos } = route.params;
  const dispatch = useDispatch();

  const handleAddShift = () => {
    dispatch(addItem({ ...medicos, quantity: 1 }));
  };
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Header title={"Detalles"} />

          <Image style={styles.image} source={medicos.image} />
          <Text style={styles.nombre}>{medicos.nombre} </Text>
          <Text style={styles.description}>{medicos.description}</Text>
          <Text style={styles.price}>Consulta: {`$ ${medicos.price}`} </Text>
          <TouchableOpacity  onPress={handleAddShift}>
            <Text style={styles.btnConfirm}>Confirmar Turno</Text>
          </TouchableOpacity>
         
        </View>
       
      </ScrollView>
    </>
  );
};

export default Details;
