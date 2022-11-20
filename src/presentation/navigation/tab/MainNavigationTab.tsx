import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "../stack/HomeStack";
import SearchStack from "../stack/SearchStack";
import MyLibraryStack from "../stack/MyLibraryStack";
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const MainNavigationTab = () => {
    return(
        <Tab.Navigator>

            <Tab.Screen name="homeStack" component={HomeStack} options={{
                tabBarIcon: ({size,color}) => {
                    return(
                        <Icon name='home' size={size} color={color} />
                    )
                },
                title: ""
            }} />

            <Tab.Screen name="searchStack" component={SearchStack} options={{
                tabBarIcon: ({size,color}) => {
                    return(
                        <Icon name="ios-search" size={size} color={color} />
                    )
                },
                title: ""
            }} />

            <Tab.Screen name="myLibraryStack" component={MyLibraryStack} options={{
                tabBarIcon: ({size,color}) => {
                    return(
                        <Icon name="ios-library" size={size} color={color} />
                    )
                },
                title: ""
            }} />

        </Tab.Navigator>
    )
}

export default MainNavigationTab;