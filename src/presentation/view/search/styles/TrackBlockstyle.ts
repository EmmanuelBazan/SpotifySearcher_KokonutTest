import {StyleSheet} from 'react-native';
import {WHITE_1} from '../../../styles/Colors';

const TrackBlockStyle = StyleSheet.create({
    blockContainer: {
        display: 'flex',
        width: '100%',
        height: 80,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 70,
        height: 70,
        margin: 15
    },
    labelContainer: {
        display: 'flex',
        flexDirection: 'column',
        color: WHITE_1,
        height: '100%',
    },
    trackLabel: {
        fontSize: 16,
        fontWeight: '700',
        color: WHITE_1
    },
    artistLabel: {
        fontSize: 12,
        fontWeight: '500',
        color: WHITE_1
    }
})

export default TrackBlockStyle;