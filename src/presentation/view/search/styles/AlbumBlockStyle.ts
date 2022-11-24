import {StyleSheet,Dimensions} from 'react-native';
import {WHITE_1} from '../../../styles/Colors';

const DIMENSIONS_SCREEN = Dimensions.get('screen');

const AlbumBlockStyle = StyleSheet.create({
    blockContainer: {
        display: 'flex',
        width: DIMENSIONS_SCREEN.width * 0.4,
        flexDirection: 'row',
        alignItems: 'flex-start',
        margin: 10,
    },
    image: {
        width: DIMENSIONS_SCREEN.width * 0.4,
        height: DIMENSIONS_SCREEN.width * 0.4,
        marginRight: 10
    },
    albumLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: WHITE_1
    },
    dateLabel: {
        fontSize: 16,
        fontWeight: 'normal',
        color: WHITE_1
    },
    artistLabel: {
        fontSize: 12,
        fontWeight: '500',
        color: WHITE_1
    },
    labelContainer: {
        display: 'flex',
        flexDirection: 'column'
    },
})

export default AlbumBlockStyle;