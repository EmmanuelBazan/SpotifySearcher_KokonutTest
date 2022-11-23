import { Dimensions, Image, StyleSheet, Text, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import Album from "../../../../domain/model/Album"

const DIMENSIONS_SCREEN = Dimensions.get('screen');

type albumBlockType = {
    albumItem: Album
}

const AlbumBlockComp = ({albumItem}:albumBlockType) => {
    return(
        <>
        <TouchableOpacity>
            <View style={styles.blockContainer}>
            <Image style={styles.image} source={{uri: albumItem?.images ? albumItem.images[0].url : 'https://pixsector.com/cache/517d8be6/av5c8336583e291842624.png' }} />
                <View style={styles.labelContainer}>
                    <Text style={styles.albumLabel} >{albumItem?.name ? albumItem.name : ''}</Text>
                    <Text style={styles.artistLabel} >{albumItem?.artists ? albumItem.artists[0].name : ''}</Text>
                    <Text style={styles.dateLabel} >{albumItem?.release_date ? albumItem.release_date : ''}</Text>
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