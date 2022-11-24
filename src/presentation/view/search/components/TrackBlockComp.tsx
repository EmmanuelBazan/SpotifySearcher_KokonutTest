import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Track from "../../../../domain/model/Track";
import {WHITE_1} from '../../../styles/Colors';
import TrackBlockStyle from '../styles/TrackBlockstyle';

type trackBlockType = {
    trackItem: Track
}

const TrackBlockComp = ({trackItem}:trackBlockType) => {

    const getUriImage = () => {
        let hasImg: boolean = trackItem?.album?.images !== undefined && trackItem?.album?.images?.length > 0;
        return hasImg === true
        ? trackItem?.album?.images![0].url
        : 'https://pixsector.com/cache/517d8be6/av5c8336583e291842624.png'
    } 

    return(
        <>
        <TouchableOpacity>
            <View style={TrackBlockStyle.blockContainer}>
                <Image style={TrackBlockStyle.image} source={{uri: getUriImage()}} />
                <View style={TrackBlockStyle.labelContainer}>
                    <Text style={TrackBlockStyle.trackLabel}>{trackItem?.name ? trackItem.name : ''}</Text>
                    <Text style={TrackBlockStyle.artistLabel}>{trackItem?.artists ? trackItem.artists[0].name : ''}</Text>
                </View>
            </View>
        </TouchableOpacity>
        </>
    )
}

export default TrackBlockComp;