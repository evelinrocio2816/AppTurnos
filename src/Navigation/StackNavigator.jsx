
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Details, Especialidades, Home, Medicos } from "../screens";

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
  
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Bienvenidos" component={Home} />
        <Stack.Screen name="Especialidades" component={Especialidades} />
        <Stack.Screen name="Medicos" component={Medicos} />
        <Stack.Screen name="Detalles" component={Details} />
      </Stack.Navigator>
  
  );
}
export default StackNavigator;
