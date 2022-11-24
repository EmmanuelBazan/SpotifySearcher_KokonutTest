import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MyLibraryStyles from "./styles/MyLibraryStyes";
import {GREEN_1} from '../../styles/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MyLibraryView = () => {
    return(
        <SafeAreaView style={MyLibraryStyles.mainContainer} >
            <Icon name="web-clock" size={80} color={GREEN_1} />
        </SafeAreaView>
    )
}

export default MyLibraryView;