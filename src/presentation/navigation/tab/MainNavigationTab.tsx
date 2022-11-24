import { createBottomTabNavigator, BottomTabBarOptions  } from "@react-navigation/bottom-tabs";
import HomeStack from "../stack/HomeStack";
import SearchStack from "../stack/SearchStack";
import MyLibraryStack from "../stack/MyLibraryStack";
import Icon from "react-native-vector-icons/Ionicons";
import {BLACK_1,GREEN_1} from '../../styles/Colors';

type MainBottomTabParamList = {Home: undefined;Details: undefined;};

const Tab = createBottomTabNavigator()

const MainNavigationTab = () => {
    return(
        <Tab.Navigator tabBarOptions={{style: {backgroundColor: BLACK_1},activeTintColor: GREEN_1}} >

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