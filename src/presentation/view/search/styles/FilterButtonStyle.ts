import { StyleSheet } from 'react-native';
import {GREEN_1,WHITE_1} from '../../../styles/Colors';

const FilterButtonStyle = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        flexDirection: 'row',
        height: 40,
        borderColor: GREEN_1,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        paddingLeft: 10,
        paddingRight: 10,
        margin: 5
    },
    mainContainerSelected: {
        display: 'flex',
        flexDirection: 'row',
        height: 40,
        borderColor: GREEN_1,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: GREEN_1,
        paddingLeft: 10,
        paddingRight: 10,
        margin: 5
    },
    label: {
        color: GREEN_1,
        fontSize: 14
    },
    labelSelected: {
        color: WHITE_1,
        fontSize: 14
    }
})

export default FilterButtonStyle;