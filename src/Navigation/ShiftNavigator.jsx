
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Shift} from "../screens";

const Stack = createNativeStackNavigator();

function ShiftNavigator() {
  return (
      <Stack.Navigator initialRouteName="Shift" screenOptions={{headerShown:false}}>
  
        <Stack.Screen name="Shift" component={Shift} />
         
      </Stack.Navigator>
   
  );
}
export default ShiftNavigator;