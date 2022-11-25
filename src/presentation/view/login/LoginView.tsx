import { Text, View, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from "@react-navigation/stack";
import { LoginStackParamList } from "../../navigation/stack/LoginStackParams";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginViewModel from './LoginViewModel';
import { useEffect, useState } from 'react';
import LoginStyles from './styles/LoginStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { GREEN_1, PURPLE_1 } from '../../styles/Colors';

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
            <Icon name='spotify' size={200} color={GREEN_1} />
            <Icon name='virus' size={75} color={PURPLE_1} style={{top: -80, left: 60}} />
            <Text style={LoginStyles.titleLabel} >Spotify Searcher</Text>
            <TouchableOpacity onPress={loginToSpotify}>
                <View style={LoginStyles.buttonStyle} >
                    <Text style={LoginStyles.buttonLabel} >Iniciar sesion</Text>
                </View>
            </TouchableOpacity>
            <Text style={{ color: 'red', fontSize: 24 }} >{errorMess}</Text>
        </SafeAreaView>
    )
}

export default LoginView;
