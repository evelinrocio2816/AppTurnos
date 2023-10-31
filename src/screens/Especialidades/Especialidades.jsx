import { FlatList, View } from "react-native";
import { Header } from "../../components";
import { CategoryItem } from "./components/CategoryItem";
import { useGetCategoriesQuery } from "../../services/medicApi";



const Especialidad = ({ navigation }) => {
const {data}=useGetCategoriesQuery()
  return (
    <>
      <Header title={"Especialidades"} />

      <View>
    <FlatList
          data={data}
          keyExtractor={category => category}
          renderItem={({ item }) => (
            <CategoryItem
            category={item.especialidad}
            navigation={navigation}
          />
          )}
        />
        
      </View>
    </>
  );
};

export default Especialidad;
