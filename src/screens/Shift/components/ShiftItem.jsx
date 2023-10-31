import {Image, Pressable, Text, View } from 'react-native'
import { styles } from './ShiftItem.styles'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'

const ShiftItem = ({item}) => {
  return (
    <View style={styles.container}>
      <View>
      <Image style={styles.image} source={item.image} />
      </View>
      <View>
        <Text style={styles.name}>Dr/a: {item.nombre} </Text>
      </View>
      <View style={styles.details}> 
        <View>
        <Text>{item.quantity}</Text>
            <Text>Precio Consulta: $ {item.price}</Text>
        </View>
        <Pressable>
            <FontAwesome5 name="trash-alt" size={24} color={'red'} />
        </Pressable>
      </View>
    </View>
  )
}

export default ShiftItem

