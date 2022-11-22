import React, { useEffect, useRef, useState } from "react";
import SpotiAppAPIDataSourceImpl from "../../../data/dataSource/API/SpotiAppAPIDataSourceImpl";
import GeneralSearchRepositoryImpl from "../../../data/repository/GeneralSearchRepositoryImpl";
import GeneralSearch from "../../../domain/model/GeneralSearch";
import GetGeneralSearch from "../../../domain/useCase/generalSearch/GetGeneralSearch";

const SearchViewModel = () => {

    const [listToShow,setListToShow] = useState<any>([]);
    const [listFilter,setListFilter] = useState(1);
    const querySearch = useRef('');
    const generalSearchRef = useRef<GeneralSearch>({
        track_list: [],
        artist_list: [],
        album_list: []
    });

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
            generalSearchRef.current = generalSearchItem;
            showList();
        }
    }

    const showList = () => {
        if(listFilter === 1){
            setListToShow(generalSearchRef.current.track_list);
        } else if(listFilter === 2) {
            setListToShow(generalSearchRef.current.artist_list);
        } else if(listFilter === 3) {
            setListToShow(generalSearchRef.current.album_list);
        }
    }

    return {
        listToShow,
        handleOnChange,
        setListFilter
    }
}

export default SearchViewModel;