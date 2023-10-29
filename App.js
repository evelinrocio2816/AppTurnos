import { useFonts } from "expo-font";
import fonts from "./src/global/fonts";
import { NavigationContainer } from "@react-navigation/native";
import BottonTabNavigator from "./src/Navigation/BottonTabNavigator";
import { Provider } from "react-redux";
import store from "./src/store"



const App = () => {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  }
  return (
   <Provider store={store}>
      <NavigationContainer>
        <BottonTabNavigator />
      </NavigationContainer>
</Provider>
  );
};

export default App;
