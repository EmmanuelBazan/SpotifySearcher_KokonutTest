import { Button, Text } from 'react-native';
import { StackNavigationProp } from "@react-navigation/stack";
import { LoginStackParamList } from "../../navigation/stack/LoginStackParams";

type LoginViewNavigationType = StackNavigationProp<LoginStackParamList,'login'>;

type props = {
    navigation: LoginViewNavigationType;
};

const LoginView = ({ navigation }: props) => {
    return(
        <>
            <Text>Login Screen!!</Text>
            <Button title='LogIn' onPress={() => {
                navigation.navigate('mainNavigationTab')
            }}/>
        </>
    )
}

export default LoginView;
