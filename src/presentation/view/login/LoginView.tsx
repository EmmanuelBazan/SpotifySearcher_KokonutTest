import { Button, Text } from 'react-native';
import { StackNavigationProp } from "@react-navigation/stack";
import { LoginStackParamList } from "../../navigation/stack/LoginStackParams";
import { SafeAreaView } from "react-native-safe-area-context";

type LoginViewNavigationType = StackNavigationProp<LoginStackParamList,'login'>;

type props = {
    navigation: LoginViewNavigationType;
};

const LoginView = ({ navigation }: props) => {
    return(
        <SafeAreaView>
            <Text>Login Screen!!</Text>
            <Button title='LogIn' onPress={() => {
                navigation.navigate('mainNavigationTab')
            }}/>
        </SafeAreaView>
            
    )
}

export default LoginView;
