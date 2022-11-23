import { Text, View, TextInput, Button, StyleSheet, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchViewModel from "./SearchViewModel";
import Track from "../../../domain/model/Track";
import { RecyclerListView, LayoutProvider, DataProvider } from "recyclerlistview";
import { useEffect, useState } from "react";

const DIMENSIONS_SCREEN = Dimensions.get('screen')

const SearchView = () => {

    const [dataProvider,setDataProvider] = useState<any>([]);

    const { listResult, handleOnChange, setListFilter } = SearchViewModel();

    const _layoutProvider = new LayoutProvider(
        (index) => 0,
        (type, dim) => {
            dim.width = DIMENSIONS_SCREEN.width;
            dim.height = 50;
        }
    )

    const createNewDataProvider = ():any => {
        return new DataProvider((r1, r2) => r1 !== r2);
    };

    useEffect(() => {
        setDataProvider(createNewDataProvider().cloneWithRows(listResult.track_list));
    },[listResult])

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
            <View style={{width: '100%', height: DIMENSIONS_SCREEN.height * 0.8}}>
                {/* {
                    listToShow.map((track: Track) => {
                        return(
                            <Text key={track.id} >{track.name}</Text>
                        )
                    })
                } */}
                <RecyclerListView 
                dataProvider={dataProvider} 
                layoutProvider={_layoutProvider} 
                rowRenderer={(type, data) => {
                    return(
                        <Text>{data.name}</Text>
                    )
                }} />
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