import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import { NavigationContainer } from "@react-navigation/native";
const Drawer=createDrawerNavigator();

function DrawerNavigator(){
    return(
        <NavigationContainer>
        <Drawer.Navigator>
        <Drawer.Screen name="homeScreen" component={HomeScreen}/>
        <Drawer.Screen name="ProfileScreen" component={ProfileScreen}/>
        </Drawer.Navigator>
        </NavigationContainer>

    )
      
}
export default DrawerNavigator;