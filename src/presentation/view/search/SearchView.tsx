import { Text, View, TextInput, Button, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchViewModel from "./SearchViewModel";
import Track from "../../../domain/model/Track";

const SearchView = () => {

    const { listToShow, handleOnChange, setListFilter } = SearchViewModel();

    return(
        <SafeAreaView>
            <View style={styles.searchContainer}>
                <TextInput style={styles.input} placeholder='¿Que deseas escuchar hoy?' onChangeText={handleOnChange} />
            </View>
            <View style={styles.filterSeccion}>
                <Button title="canciones" onPress={() => {setListFilter(1)}}/>
                <Button title="artistas" onPress={() => {setListFilter(2)}}/>
                <Button title="albumes" onPress={() => {setListFilter(3)}}/>
            </View>
            <View>
                {
                    listToShow.map((track: Track) => {
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
    },
    filterSeccion: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        margin: 10
    }
})