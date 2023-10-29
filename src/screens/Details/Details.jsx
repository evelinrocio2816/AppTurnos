import { Image, Text, View } from "react-native";
import React from "react";
import { styles } from "./Details.styles";
import { Header } from "../../components";

const Details = ({ route}) => {
  const {medicos}=route.params
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
      </View>
    </>
  );
};

export default Details;
