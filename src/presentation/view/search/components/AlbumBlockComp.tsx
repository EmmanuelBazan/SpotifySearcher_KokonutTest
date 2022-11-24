import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Album from "../../../../domain/model/Album";
import AlbumBlockStyle from "../styles/AlbumBlockStyle";

const DIMENSIONS_SCREEN = Dimensions.get('screen');

type albumBlockType = {
    albumItem: Album
}

const AlbumBlockComp = ({albumItem}:albumBlockType) => {

    const getUriImage = () => {
        let hasImg: boolean = albumItem?.images !== undefined && albumItem.images?.length > 0;
        return hasImg === true
        ? albumItem.images![0].url
        : 'https://pixsector.com/cache/517d8be6/av5c8336583e291842624.png'
    } 

    return(
        <>
        <TouchableOpacity>
            <View style={AlbumBlockStyle.blockContainer}>
            <Image style={AlbumBlockStyle.image} source={{uri: getUriImage()}} />
                <View style={AlbumBlockStyle.labelContainer}>
                    <Text style={AlbumBlockStyle.albumLabel} >{albumItem?.name ? albumItem.name : ''}</Text>
                    <Text style={AlbumBlockStyle.artistLabel} >{albumItem?.artists ? albumItem.artists[0].name : ''}</Text>
                    <Text style={AlbumBlockStyle.dateLabel} >{albumItem?.release_date ? albumItem.release_date : ''}</Text>
                </View>
            </View>
        </TouchableOpacity>
        </>
    )
}

export default AlbumBlockComp;

const styles = StyleSheet.create({
    blockContainer: {
        display: 'flex',
        width: DIMENSIONS_SCREEN.width * 0.4,
        // height: DIMENSIONS_SCREEN.width * 0.4,
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
        fontWeight: 'bold'
    },
    dateLabel: {
        fontSize: 16,
        fontWeight: 'normal'
    },
    artistLabel: {
        fontSize: 12,
        fontWeight: '500'
    },
    labelContainer: {
        display: 'flex',
        flexDirection: 'column'
    },
})