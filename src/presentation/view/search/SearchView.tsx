import { Text, View, TextInput, Button, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchViewModel from "./SearchViewModel";
import RecyclerViewComp from "./components/RecyclerViewComp";
import { useRef, useState } from "react";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {WHITE_1} from '../../styles/Colors';
import SearchStyles from "./styles/SearchStyles";

const SearchView = () => {

    const { searchItem, handleOnChange, errorMess } = SearchViewModel();
    const [listFilter,setListFilter] = useState(1);
    // const listFilter = useRef(1)

    return (
      <SafeAreaView>
        <View style={SearchStyles.searchContainer}>
          <TextInput
            style={SearchStyles.input}
            placeholder="¿Que deseas escuchar hoy?"
            onChangeText={handleOnChange}
            placeholderTextColor={WHITE_1}
          />
          <TouchableOpacity>
          <View style={SearchStyles.deleteContainer} >
            <Icon name="close" size={30} color={WHITE_1} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={SearchStyles.filterSeccion}>
          <Button
            title="canciones"
            onPress={() => {
              setListFilter(1);
            }}
          />
          <Button
            title="artistas"
            onPress={() => {
              setListFilter(2);
            }}
          />
          <Button
            title="albumes"
            onPress={() => {
              setListFilter(3);
            }}
          />
        </View>
        {
          errorMess.length > 0 ?
          <View style={SearchStyles.noConnSeccion}>
            <Text style={SearchStyles.noConnLabel}>{errorMess}</Text>
          </View>
          :
          <></>
        }
        {searchItem.track_list.length > 0 ? (
          <View style={SearchStyles.recyclerSeccion}>
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