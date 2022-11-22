import { useEffect } from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchViewModel from "./SearchViewModel";
import Track from "../../../domain/model/Track";

const SearchView = () => {

    const { trackList, handleOnChange } = SearchViewModel();

    return(
        <SafeAreaView>
            <View style={styles.searchContainer}>
                <TextInput style={styles.input} placeholder='¿Que deseas escuchar hoy?' onChangeText={handleOnChange} />
            </View>
            <View>
                {
                    trackList.map((track: Track) => {
                        return(
                            <Text key={track.id} >{track.name}</Text>
                        )
                    })
                }
            </View>
        </SafeAreaView>
    )

}

export default SearchView;

const styles = StyleSheet.create({
    searchContainer: {
        width: '100%',
        backgroundColor: 'blue',
        display: 'flex',
        flexDirection: 'row'
    },
    input: {
        backgroundColor: 'white',
        fontSize: 16,
        width: '90%',
        padding: 10
    }
})