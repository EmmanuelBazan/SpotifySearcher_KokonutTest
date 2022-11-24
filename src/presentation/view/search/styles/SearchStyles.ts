import {StyleSheet,Dimensions} from 'react-native';
import {GRAY_1,WHITE_1,BLACK_1} from '../../../styles/Colors';

const DIMENSIONS_SCREEN = Dimensions.get('screen');

const SearchStyles = StyleSheet.create({
    searchContainer: {
        width: '100%',
        backgroundColor: GRAY_1,
        display: 'flex',
        flexDirection: 'row',
        height: 50
    },
    input: {
        backgroundColor: GRAY_1,
        fontSize: 16,
        width: '90%',
        padding: 10,
        color: WHITE_1
    },
    filterSeccion: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        backgroundColor: BLACK_1
    },
    recyclerSeccion: {
        width: '100%',
        height: DIMENSIONS_SCREEN.height * 0.8,
        backgroundColor: BLACK_1
    },
    noConnSeccion: {
      display: 'flex',
      width: '100%',
      padding: 10,
      flexDirection: 'row',
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center'
    },
    noConnLabel: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'normal'
    },
    deleteContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: DIMENSIONS_SCREEN.width * 0.1,
        height: '100%'
    }
})

export default SearchStyles;