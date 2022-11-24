import { Text, View, TextInput, Button, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchViewModel from "./SearchViewModel";
import RecyclerViewComp from "./components/RecyclerViewComp";
import { useRef, useState } from "react";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {WHITE_1} from '../../styles/Colors';
import SearchStyles from "./styles/SearchStyles";
import FilterButton from "./components/FilterButton";

const SearchView = () => {

    const { searchItem, handleOnChange, errorMess, valueInput, setValueInput } = SearchViewModel();
    const [listFilter,setListFilter] = useState(1);
    // const listFilter = useRef(1)

    return (
      <SafeAreaView>
        <View style={SearchStyles.searchContainer}>
          <TextInput
            style={SearchStyles.input}
            placeholder="¿Que deseas escuchar hoy?"
            onChangeText={handleOnChange}
            placeholderTextColor={"#898989"}
            value={valueInput}
          />
          {
            valueInput.length > 0 ?
            <TouchableOpacity onPress={() => {setValueInput('')}}>
          <View style={SearchStyles.deleteContainer} >
            <Icon name="close" size={30} color={WHITE_1} />
            </View>
          </TouchableOpacity> 
            :
            <></>
          }
        </View>
        <View style={SearchStyles.filterSeccion}>
          <FilterButton title="canciones" setListFilter={setListFilter} filterNum={1} listFilter={listFilter} />
          <FilterButton title="artistas" setListFilter={setListFilter} filterNum={2} listFilter={listFilter} />
          <FilterButton title="albumes" setListFilter={setListFilter} filterNum={3} listFilter={listFilter} />
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
          <View style={SearchStyles.recyclerSeccion} />
        )}
      </SafeAreaView>
    );

}

export default SearchView;