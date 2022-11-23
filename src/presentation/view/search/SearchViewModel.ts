import React, { useEffect, useRef, useState } from "react";
import SpotiAppAPIDataSourceImpl from "../../../data/dataSource/API/SpotiAppAPIDataSourceImpl";
import GeneralSearchRepositoryImpl from "../../../data/repository/GeneralSearchRepositoryImpl";
import GeneralSearch from "../../../domain/model/GeneralSearch";
import Track from "../../../domain/model/Track";
import GetGeneralSearch from "../../../domain/useCase/generalSearch/GetGeneralSearch";

const SearchViewModel = () => {

    const [listToShow,setListToShow] = useState<[]>([]);
    const [searchItem,setSearchItem] = useState<GeneralSearch>({
        track_list: [],
        artist_list: [],
        album_list: []
    });
    const querySearch = useRef(''); 

    const useCase = new GetGeneralSearch(new GeneralSearchRepositoryImpl(new SpotiAppAPIDataSourceImpl()));

    const handleOnChange = async(value: string) => {
        querySearch.current = value;
        if(value.length > 0){
            const generalSearchItem: GeneralSearch = await useCase.invoke(querySearch.current);//querySearch.current
            setSearchItem(generalSearchItem);
        }
    }

    return {
        listToShow,
        handleOnChange,
        searchItem,
        querySearch
    }
}

export default SearchViewModel;