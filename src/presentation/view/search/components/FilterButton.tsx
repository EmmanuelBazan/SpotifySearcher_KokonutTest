import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import FilterButtonStyle from "../styles/FilterButtonStyle";

type filterButtonType = {
    title: string,
    setListFilter: any,
    filterNum: number,
    listFilter: number
}

const FilterButton = ({title,setListFilter,filterNum,listFilter}:filterButtonType) => {

    return(
        <TouchableOpacity onPress={() => {
            setListFilter(filterNum)
            }}>
            <View style={listFilter === filterNum ? FilterButtonStyle.mainContainerSelected : FilterButtonStyle.mainContainer} >
                <Text style={listFilter === filterNum ? FilterButtonStyle.labelSelected : FilterButtonStyle.label} >{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default FilterButton;