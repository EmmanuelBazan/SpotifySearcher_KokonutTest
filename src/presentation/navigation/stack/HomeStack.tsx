import { createStackNavigator } from "@react-navigation/stack";
import HomeView from "../../view/home/HomeView";

const Stack = createStackNavigator();

const HomeStack = () => {
    return(
        <Stack.Navigator>

            <Stack.Screen name="home" component={HomeView} options={{
                headerShown: false
            }} />

        </Stack.Navigator>
    )
}

export default HomeStack;