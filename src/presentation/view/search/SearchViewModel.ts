import React, { useEffect, useRef, useState } from "react";
import SpotiAppAPIDataSourceImpl from "../../../data/dataSource/API/SpotiAppAPIDataSourceImpl";
import GeneralSearchRepositoryImpl from "../../../data/repository/GeneralSearchRepositoryImpl";
import GeneralSearch from "../../../domain/model/GeneralSearch";
import GetGeneralSearch from "../../../domain/useCase/generalSearch/GetGeneralSearch";

const SearchViewModel = () => {

    const [listToShow,setListToShow] = useState([]);
    const [listFilter,setListFilter] = useState(1);
    const [listResult,setListResult] = useState<GeneralSearch>({
        track_list: [],
        artist_list: [],
        album_list: []
    });
    const querySearch = useRef(''); 

    const useCase = new GetGeneralSearch(new GeneralSearchRepositoryImpl(new SpotiAppAPIDataSourceImpl()));

    useEffect(() => {
        if(querySearch.current.length > 0){
            showList();
        }
    },[listFilter])

    const handleOnChange = async(value: string) => {
        querySearch.current = value;
        if(value.length > 0){
            const generalSearchItem: GeneralSearch = await useCase.invoke(querySearch.current);
            console.log("GENERAL SEARCH ---> ",generalSearchItem.track_list)
            setListResult(generalSearchItem);
            showList();
        }
    }

    const showList = () => {
    }

    return {
        listToShow,
        handleOnChange,
        setListFilter,
        listResult
    }
}

export default SearchViewModel;