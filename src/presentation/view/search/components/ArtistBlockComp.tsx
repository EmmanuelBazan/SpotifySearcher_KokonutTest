import { Image, StyleSheet, Text, View } from "react-native"
import Artist from "../../../../domain/model/Artist"

type artBlockType = {
    artistItem: Artist
}

const ArtistBlockComp = ({artistItem}:artBlockType) => {
    return(
        <>
        <View style={styles.blockContainer} >
            <Image style={styles.image} source={{uri: artistItem?.images ? artistItem.images[0].url : 'https://pixsector.com/cache/517d8be6/av5c8336583e291842624.png' }} />
            <Text style={styles.artistLabel} >{artistItem?.name ? artistItem.name : ''}</Text>
        </View>
        </>
    )
}

export default ArtistBlockComp;

const styles = StyleSheet.create({
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
        fontWeight: '700'
    }
})