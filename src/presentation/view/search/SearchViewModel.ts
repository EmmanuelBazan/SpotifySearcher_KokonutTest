import React, { useEffect, useRef, useState } from "react";
import SpotiAppAPIDataSourceImpl from "../../../data/dataSource/API/SpotiAppAPIDataSourceImpl";
import GeneralSearchRepositoryImpl from "../../../data/repository/GeneralSearchRepositoryImpl";
import GeneralSearch from "../../../domain/model/GeneralSearch";
import GetGeneralSearch from "../../../domain/useCase/generalSearch/GetGeneralSearch";
import NetInfo from "@react-native-community/netinfo";

const SearchViewModel = () => {

    const [listToShow,setListToShow] = useState<[]>([]);
    const [searchItem,setSearchItem] = useState<GeneralSearch>({
        track_list: [],
        artist_list: [],
        album_list: []
    });
    const [errorMess,setErrorMess] = useState('');
    const querySearch = useRef(''); 

    const useCase = new GetGeneralSearch(new GeneralSearchRepositoryImpl(new SpotiAppAPIDataSourceImpl()));

    const handleOnChange = async(value: string) => {
        querySearch.current = value;
        if(value.length > 0){
            const isConn = await handleNetwork();
            if(isConn){
                setErrorMess('')
                const generalSearchItem: GeneralSearch = await useCase.invoke(querySearch.current);//querySearch.current
                setSearchItem(generalSearchItem);
            } else {
                setErrorMess('Sin conexion de internet')
            }
        }
    }

    const handleNetwork = async() => {
        return NetInfo.fetch().then(state => {
          console.log('Is connected?', state.isConnected);
          return state.isConnected
        })
        .catch((err) => {
            console.log("ERROR HANDLE NETWORK ---> ",err)
            return false
        })
    }

    return {
        listToShow,
        handleOnChange,
        searchItem,
        querySearch,
        errorMess
    }
}

export default SearchViewModel;