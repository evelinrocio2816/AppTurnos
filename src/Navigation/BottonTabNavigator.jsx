import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import StackNavigator from "./StackNavigator";
import ShiftNavigator from "./ShiftNavigator";
import { colors } from "../global/colors";
import OrdersNavigator from "./OrdersNavigator";
import ProfileNavigator from "./ProfileNavigator";

const BottonTab = createBottomTabNavigator();

function BottonTabNavigator() {
  return (
    <BottonTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
       
      <BottonTab.Screen name="HomeNav" component={StackNavigator} options={{
         tabBarIcon:({focused})=> (
            <FontAwesome5 size={24} name="home" color={focused ? "#fff": colors.color6}/>
         )
      }} />
       <BottonTab.Screen name="ProfileNav" component={ProfileNavigator} options={{
         tabBarIcon:({focused})=> (
            <FontAwesome5 size={24} name="user" color={focused ? "#fff": colors.color6}/>
         )
      }} />
      <BottonTab.Screen name="ShiftNav" component={ShiftNavigator}  options={{
         tabBarIcon:({focused})=> (
            <FontAwesome5 size={24} name="user-md" color={focused ? "#fff": colors.color6}/>
         )
      }}
      
       />
      
        <BottonTab.Screen name="OrdersNav" component={OrdersNavigator} options={{
         tabBarIcon:({focused})=> (
            <FontAwesome5 size={24} name="address-card" color={focused ? "#fff": colors.color6}/>
         )
      }} />
    </BottonTab.Navigator>
  );
}

export default BottonTabNavigator;



const styles = StyleSheet.create({
  tabBar:{
   backgroundColor:colors.color1,
   borderTopRightRadius:20,
   borderTopLeftRadius:20,
  }
})