import { FlatList, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Header, SearchInput } from "../../components";
import styles from "./Medicos.styles";
import {useSelector} from 'react-redux'
import { useGetMedicsByCategoryQuery } from "../../services/medicApi";


const Medicos = ({ navigation}) => {
  const category = useSelector(state => state.medic.categorySelected)
  const [arrMedicos, setArrMedicos]=useState([])
  const [keyword, setKeyword] = useState("");
 const {data}=useGetMedicsByCategoryQuery(category)

 useEffect(() => {
  console.log(data)
 if(data){
     
  const medicsFiltered = data.filter(medico => medico.especialidad.includes(keyword))
  setArrMedicos(medicsFiltered)
 }  
 }, [keyword])

  return (
    <View style={styles.container}>
      <Header title={"Medicos/Servicios"} />
      <SearchInput onSearch={setKeyword} />
      <View style={styles.listContainer}>
          <FlatList
            data={arrMedicos}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.listContainerMedico}
                onPress={() =>
                  navigation.navigate("Detalles", { medicos: item })
                }
              >
                <Text style={styles.text}>{item.nombre}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
          />

      </View>
    </View>
  );
};

export default Medicos;
