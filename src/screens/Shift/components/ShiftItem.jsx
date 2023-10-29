import {Pressable, Text, View } from 'react-native'
import { styles } from './ShiftItem.styles'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'

const ShiftItem = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>Medico: </Text>
      </View>
      <View style={styles.details}>
        <View>
          
            <Text>Precio Consulta: $ ***</Text>
        </View>
        <Pressable>
            <FontAwesome5 name="trash-alt" size={24} color={'red'} />
        </Pressable>
      </View>
    </View>
  )
}

export default ShiftItem

