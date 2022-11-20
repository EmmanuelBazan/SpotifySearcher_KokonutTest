import { Button, Text, Linking } from 'react-native';
import { StackNavigationProp } from "@react-navigation/stack";
import { LoginStackParamList } from "../../navigation/stack/LoginStackParams";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect } from 'react';

const CLIENT_ID = 'b666fc8cd91c4f2a952ff2c67b6a81e8';
const URL_CALLBACK = 'spotifysearcher://login/';
const URL_SPOTIFY = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${URL_CALLBACK}&scope=user-read-private`;

type LoginViewNavigationType = StackNavigationProp<LoginStackParamList,'login'>;

type props = {
    navigation: LoginViewNavigationType;
};

const LoginView = ({ navigation }: props) => {

    useEffect(() => {
        Linking.addEventListener('url',handleUrl)
        return () => { Linking.removeAllListeners }
    },[])

    const handleUrl = ({url = ''}) => {
        console.log("LINKING LISTENER ---> ",url)
    }

    const handlePress = async() => {
        await Linking.openURL(URL_SPOTIFY);
    }

    return(
        <SafeAreaView>
            <Text>Login Screen!!</Text>
            <Button title='LogIn' onPress={handlePress}/>
        </SafeAreaView>
            
    )
}

export default LoginView;
