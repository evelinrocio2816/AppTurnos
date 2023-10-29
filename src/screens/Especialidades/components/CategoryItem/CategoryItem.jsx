import { Pressable, Text} from "react-native";
import React from "react";
import { Card } from "../../../../components";
import styles from "./CategoryItem.styles";
import { useDispatch } from "react-redux";
import { setCategorySelected } from "../../../../features/shift/shiftSlice";



const CategoryItem = ({ category, navigation }) => {
  const dispatch=useDispatch()
  return (
    <Pressable
      onPress={() => {
        dispatch(setCategorySelected(category))
        navigation.navigate("Medicos", { category })}}
    >
      <Card style={styles.cardContainer}>
        <Text style={styles.text}>{category}</Text>
      </Card>
    </Pressable>
  );
};

export default CategoryItem;
