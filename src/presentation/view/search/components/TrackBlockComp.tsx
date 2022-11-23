import { Image, StyleSheet, Text, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import Track from "../../../../domain/model/Track"

type trackBlockType = {
    trackItem: Track
}

const TrackBlockComp = ({trackItem}:trackBlockType) => {
    console.log("TRACK ITEM ---> ",trackItem)
    return(
        <>
        <TouchableOpacity>
            <View style={styles.blockContainer}>
                <Image style={styles.image} source={{uri: trackItem?.album?.images ? trackItem.album.images[0].url : 'https://pixsector.com/cache/517d8be6/av5c8336583e291842624.png'}} />
                <View style={styles.labelContainer}>
                    <Text style={styles.trackLabel}>{trackItem?.name ? trackItem.name : ''}</Text>
                    <Text style={styles.artistLabel}>{trackItem?.artists ? trackItem.artists[0].name : ''}</Text>
                </View>
            </View>
        </TouchableOpacity>
        </>
    )
}

export default TrackBlockComp;

const styles = StyleSheet.create({
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
        flexDirection: 'column'
    },
    trackLabel: {
        fontSize: 16,
        fontWeight: '700'
    },
    artistLabel: {
        fontSize: 12,
        fontWeight: '500'
    }
})