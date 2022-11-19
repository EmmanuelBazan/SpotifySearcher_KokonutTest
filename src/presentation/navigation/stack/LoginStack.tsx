import { createStackNavigator } from "@react-navigation/stack"
import LoginView from "../../view/login/LoginView";
import MainNavigationTab from "../tab/MainNavigationTab";
import { LoginStackParamList } from "./LoginStackParams";

const Stack = createStackNavigator<LoginStackParamList>();

const LoginStack = () => {
    return(
        <Stack.Navigator>

            <Stack.Screen name="login" component={LoginView} />

            <Stack.Screen name="mainNavigationTab" component={MainNavigationTab} />

        </Stack.Navigator>
    )
}

export default LoginStack;