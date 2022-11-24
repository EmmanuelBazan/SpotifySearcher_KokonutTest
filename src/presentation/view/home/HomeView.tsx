import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeStyles from './styles/HomeStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {GREEN_1} from '../../styles/Colors';

const HomeView = () => {
    return(
        <SafeAreaView style={HomeStyles.mainContainer} >
            <Icon name="web-clock" size={80} color={GREEN_1} />
        </SafeAreaView>
    )
}

export default HomeView;