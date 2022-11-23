import { Text, View, TextInput, Button, StyleSheet, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchViewModel from "./SearchViewModel";
import RecyclerViewComp from "./components/RecyclerViewComp";
import { useRef, useState } from "react";

const DIMENSIONS_SCREEN = Dimensions.get('screen');

const SearchView = () => {

    const { searchItem, handleOnChange, errorMess } = SearchViewModel();
    const [listFilter,setListFilter] = useState(1);
    // const listFilter = useRef(1)

    return (
      <SafeAreaView>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            placeholder="¿Que deseas escuchar hoy?"
            onChangeText={handleOnChange}
          />
        </View>
        <View style={styles.filterSeccion}>
          <Button
            title="canciones"
            onPress={() => {
              setListFilter(listFilter => (listFilter = 1));
            }}
          />
          <Button
            title="artistas"
            onPress={() => {
              setListFilter(listFilter => (listFilter = 2));
            }}
          />
          <Button
            title="albumes"
            onPress={() => {
              setListFilter(listFilter => (listFilter = 3));
            }}
          />
        </View>
        {
          errorMess.length > 0 ?
          <View style={styles.noConnSeccion}>
            <Text style={styles.noConnLabel}>{errorMess}</Text>
          </View>
          :
          <></>
        }
        {searchItem.track_list.length > 0 ? (
          <View style={styles.recyclerSeccion}>
          <RecyclerViewComp
            searchItem={searchItem}
            filterItem={listFilter}
          />
        </View>
        ) : (
          <View />
        )}
      </SafeAreaView>
    );

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
    },
    recyclerSeccion: {
        width: '100%',
        height: DIMENSIONS_SCREEN.height * 0.8
    },
    noConnSeccion: {
      display: 'flex',
      width: '100%',
      padding: 10,
      flexDirection: 'row',
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center'
    },
    noConnLabel: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'normal'
    }
})