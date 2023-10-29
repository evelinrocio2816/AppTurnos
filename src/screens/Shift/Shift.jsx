import { FlatList, Pressable, Text, View } from 'react-native'
import { styles } from './Shift.styles'
import { Header } from '../../components'
import dataShift from '../../data/dataShift'
import { ShiftItem } from './components'

const Shift = () => {
  const renderItem=()=>(<ShiftItem/>)
   

  
  return (
    <View style={styles.container}>
      <Header title={'Mis Turnos'}/>
      <View style={styles.flatlist}>
        <FlatList 
        data={dataShift}
         keyExtractor={item=> item.id}
        renderItem={renderItem}/>
      </View>
      <View style={styles.containerConfirm} >
        <Pressable >
            <Text>Confirm</Text>
            <View>
                <Text>{`Total: $100`}</Text>
            </View>
        </Pressable>
      </View>
    </View>
  )
}

export default Shift

