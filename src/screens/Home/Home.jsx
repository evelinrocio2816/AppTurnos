import { ScrollView, Text, View, ImageBackground,TouchableOpacity } from "react-native";
import React from "react";
import { Header } from "../../components";
import { styles } from "./Home.styles";

const Home = ({navigation}) => {
  return (
    <>
      <View >
        <Header title={"Salud.Ar"} />
      </View>
      <View style={styles.containerTitle}>
        <Text style={styles.textTitle}>Bienvenidos a la revolucion de la salud</Text>
      <Text style={styles.textTitle} >¿Que Buscas?</Text>
      </View>
      <ScrollView>
        <ImageBackground source={require("../../assets/Image/fondo3.webp")}>
        <TouchableOpacity onPress={()=> navigation.navigate('Especialidades')} style={styles.containerText}>
            <Text style={styles.text}>Atencion Presencial </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> navigation.navigate('Especialidades')} style={styles.containerTextI}>
            <Text style={styles.text}>Atencion por Videollamada</Text>
          </TouchableOpacity>
          <View style={styles.containerView}>
            <TouchableOpacity onPress={()=> navigation.navigate('Especialidades')} style={styles.containerText}>
              <Text style={styles.text}>Estudios de Laboratorios</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('Especialidades')} style={styles.containerText}>
              <Text style={styles.text}>Diagnostico por imagenes</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity  onPress={()=> navigation.navigate('Especialidades')} style={styles.containerTextIII}>
            <Text style={styles.text}>Guardia</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=> navigation.navigate('Especialidades')} style={styles.containerTextII}>
            <Text style={styles.text}>Vacunacion</Text>
          </TouchableOpacity>
        </ImageBackground>
      </ScrollView>
    </>
  );
};

export default Home;
