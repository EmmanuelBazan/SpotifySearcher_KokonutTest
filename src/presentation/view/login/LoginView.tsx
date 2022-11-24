import { Button, Text } from 'react-native';
import { StackNavigationProp } from "@react-navigation/stack";
import { LoginStackParamList } from "../../navigation/stack/LoginStackParams";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginViewModel from './LoginViewModel';
import { useEffect } from 'react';
import LoginStyles from './styles/LoginStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
        <SafeAreaView style={LoginStyles.mainContainer} >
            <Text>Spotify Searcher</Text>
            <Button title='LogIn' onPress={loginToSpotify}/>
            <Text style={{ color: 'red', fontSize: 24 }} >{errorMess}</Text>
        </SafeAreaView>
    )
}

export default LoginView;
