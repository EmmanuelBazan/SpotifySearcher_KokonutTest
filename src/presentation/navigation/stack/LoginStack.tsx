import { createStackNavigator } from "@react-navigation/stack"
import LoginView from "../../view/login/LoginView";
import MainNavigationTab from "../tab/MainNavigationTab";
import { LoginStackParamList } from "./LoginStackParams";

const Stack = createStackNavigator<LoginStackParamList>();

const LoginStack = () => {
    return(
        <Stack.Navigator>

            <Stack.Screen name="login" component={LoginView} options={{
                headerShown: false
            }} />

            <Stack.Screen name="mainNavigationTab" component={MainNavigationTab} options={{
                headerShown: false
            }} />

        </Stack.Navigator>
    )
}

export default LoginStack;