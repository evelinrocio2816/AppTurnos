
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Login,SignUp } from "../screens";

const AuthStack = createNativeStackNavigator();

function AuthStackNavigator() {
  return (
  
      <AuthStack.Navigator initialRouteName="SignUp" screenOptions={{headerShown:false}}>
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="SignUp" component={SignUp} />
       
      </AuthStack.Navigator>
  
  );
}
export default AuthStackNavigator;
