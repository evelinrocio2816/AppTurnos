import { FlatList, ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './Shift.styles'
import { Header } from '../../components'
import dataShift from '../../data/dataShift'
import { ShiftItem } from './components'
import { useSelector } from 'react-redux'
import { usePostOrderMutation } from '../../services/medicApi'

const Shift = () => {
  const renderItem=({item})=><ShiftItem item={item}/>

  const shift = useSelector(state=> state.shift.items)
  const total = useSelector(state =>state.shift.total)
  const [triggerPost]=usePostOrderMutation()
   
const confirtShift = ()=>{
triggerPost({total, shift, user:'LoggedUser'})
}
  
  return (
    
   <View style={styles.container}  >
      <Header title={'Mis Turnos'}/>
        <ImageBackground style={styles.container} source={require("../../assets/Image/fondo.jpg")}>
      <View style={styles.flatlist}>
      
        <FlatList 
        data={shift}
         keyExtractor={item=> item.id}
        renderItem={renderItem}/>
      </View>
      
      <View style={styles.containerConfirm} >
      <View>
                <Text >{`Total: $${total}`}</Text>
            </View>
        <TouchableOpacity onPress={confirtShift}  >
            <Text  >Confirm Turno</Text>
            
        </TouchableOpacity>
     
      </View>
        </ImageBackground>
</View>
     
  )
}

export default Shift

