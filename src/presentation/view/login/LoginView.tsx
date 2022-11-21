import { Button, Text } from 'react-native';
import { StackNavigationProp } from "@react-navigation/stack";
import { LoginStackParamList } from "../../navigation/stack/LoginStackParams";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginViewModel from './LoginViewModel';

type LoginViewNavigationType = StackNavigationProp<LoginStackParamList,'login'>;

type props = {
    navigation: LoginViewNavigationType;
};

const LoginView = ({ navigation }: props) => {

    const { loginToSpotify } = LoginViewModel();

    return(
        <SafeAreaView>
            <Text>Login Screen!!</Text>
            <Button title='LogIn' onPress={loginToSpotify}/>
        </SafeAreaView>
    )
}

export default LoginView;
