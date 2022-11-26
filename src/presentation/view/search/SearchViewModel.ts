import React, { useEffect, useRef, useState } from "react";
import { NativeModules } from "react-native";
import SpotiAppAPIDataSourceImpl from "../../../data/dataSource/API/SpotiAppAPIDataSourceImpl";
import GeneralSearchRepositoryImpl from "../../../data/repository/GeneralSearchRepositoryImpl";
import GeneralSearch from "../../../domain/model/GeneralSearch";
import GetGeneralSearch from "../../../domain/useCase/generalSearch/GetGeneralSearch";

const SearchViewModel = () => {

    const { ConnectionStatusModule } = NativeModules;
    const [valueInput,setValueInput] = useState('');
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
        setValueInput(value);
        if(value.length > 0){
            await ConnectionStatusModule.checkConnectionStatus(callBackStatusConnection);
        }
    }

    const callBackStatusConnection = async(status: string, connected: boolean) => {
        if(connected){
            setErrorMess('')
            const generalSearchItem: GeneralSearch = await useCase.invoke(querySearch.current);//querySearch.current
            setSearchItem(generalSearchItem);
        } else {
            setErrorMess(status);
        }
    }

    return {
        listToShow,
        handleOnChange,
        searchItem,
        querySearch,
        errorMess,
        valueInput,
        setValueInput
    }
}

export default SearchViewModel;