import { Button, Text } from 'react-native';
import { StackNavigationProp } from "@react-navigation/stack";
import { LoginStackParamList } from "../../navigation/stack/LoginStackParams";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginViewModel from './LoginViewModel';
import { useEffect } from 'react';

type LoginViewNavigationType = StackNavigationProp<LoginStackParamList,'login'>;

type props = {
    navigation: LoginViewNavigationType;
};

const LoginView = ({ navigation }: props) => {

    const { loginToSpotify, errorMess, goHome } = LoginViewModel();

    useEffect(() => {
        if(goHome){
            navigation.navigate('mainNavigationTab')
        }
    },[goHome])

    return(
        <SafeAreaView>
            <Text>Login Screen!!</Text>
            <Button title='LogIn' onPress={loginToSpotify}/>
            <Text style={{ color: 'red', fontSize: 24 }} >{errorMess}</Text>
        </SafeAreaView>
    )
}

export default LoginView;
