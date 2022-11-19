import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "../stack/HomeStack";
import SearchStack from "../stack/SearchStack";
import MyLibraryStack from "../stack/MyLibraryStack";

const Tab = createBottomTabNavigator();

const MainNavigationTab = () => {
    return(
        <Tab.Navigator>

            <Tab.Screen name="homeStack" component={HomeStack} />

            <Tab.Screen name="searchStack" component={SearchStack} />

            <Tab.Screen name="myLibraryStack" component={MyLibraryStack} />

        </Tab.Navigator>
    )
}

export default MainNavigationTab;