import {  Text, View , Image} from 'react-native'
import { styles } from './Header.styles'

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/Image/loguito.png')}/>
    <Text style={styles.text}>{title}</Text>
    </View>
   )
}

export default Header

