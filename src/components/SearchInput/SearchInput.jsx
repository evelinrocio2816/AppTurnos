import { Pressable, TextInput, View} from "react-native";
import React from "react";
import { useState } from "react";
import AntDesign from '@expo/vector-icons/AntDesign'
import styles from './SearchInput.styles'

const SearchInput = ({ onSearch}) => {

  const [value, setValue] = useState("");

  const search = () => {
    onSearch(value);
  };
  const clearInput = () => {
    setValue("");
    onSearch("");
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.Input}
        value={value}
        onChangeText={setValue}
        placeholder="Search Service 🔍"
      />
      <Pressable onPress={search}>
        <AntDesign name="search1" size={25} color={'black'}/>
      </Pressable>
      <Pressable onPress={clearInput}>
        <AntDesign name="closecircle" size={25} color={'black'}/>
      </Pressable>
  
    </View>

   
  );
};

export default SearchInput;