import { StyleSheet } from 'react-native';
import { BLACK_1, WHITE_1, GREEN_1 } from '../../../styles/Colors';

const LoginStyles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        height: '100%',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: BLACK_1
    },
    buttonStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: GREEN_1,
        width: 200,
        padding: 10,
        margin: 20
    },
    buttonLabel: {
        color: WHITE_1,
        fontSize: 18
    },
    titleLabel: {
        color: GREEN_1,
        fontSize: 28,
        fontWeight: 'bold',
        top: -80
    }
})

export default LoginStyles;