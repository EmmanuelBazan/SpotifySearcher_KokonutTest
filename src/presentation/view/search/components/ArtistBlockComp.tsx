import { Image, StyleSheet, Text, View } from "react-native";
import Artist from "../../../../domain/model/Artist";
import ArtistBlockStyle from '../styles/ArtistBlockStyle';

type artBlockType = {
    artistItem: Artist
}

const ArtistBlockComp = ({artistItem}:artBlockType) => {

    const getUriImage = () => {
        let hasImg: boolean = artistItem?.images !== undefined && artistItem.images?.length > 0;
        return hasImg === true
        ? artistItem.images![0].url
        : 'https://pixsector.com/cache/517d8be6/av5c8336583e291842624.png'
    } 

    return(
        <>
        <View style={ArtistBlockStyle.blockContainer} >
            <Image 
            style={ArtistBlockStyle.image}
            source={{uri: getUriImage()}} />
            <Text style={ArtistBlockStyle.artistLabel}>{artistItem?.name ? artistItem.name : ''}</Text>
        </View>
        </>
    )
}

export default ArtistBlockComp;