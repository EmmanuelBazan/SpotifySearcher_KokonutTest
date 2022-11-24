import {StyleSheet} from 'react-native';
import {WHITE_1} from '../../../styles/Colors';

const ArtistBlockStyle = StyleSheet.create({
    blockContainer: {
        display: 'flex',
        width: '100%',
        height: 80,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 60,
        height: 60,
        margin: 15,
        borderRadius: 30
    },
    artistLabel: {
        fontSize: 16,
        fontWeight: '700',
        color: WHITE_1
    }
})

export default ArtistBlockStyle;