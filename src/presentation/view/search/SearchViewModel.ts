import React, { useState } from "react";
import SpotiAppAPIDataSourceImpl from "../../../data/dataSource/API/SpotiAppAPIDataSourceImpl";
import GeneralSearchRepositoryImpl from "../../../data/repository/GeneralSearchRepositoryImpl";
import GeneralSearch from "../../../domain/model/GeneralSearch";
import Track from "../../../domain/model/Track";
import GetGeneralSearch from "../../../domain/useCase/generalSearch/GetGeneralSearch";

const SearchViewModel = () => {

    const [trackList,setTrackList] = useState<Track[]>([]);

    const useCase = new GetGeneralSearch(new GeneralSearchRepositoryImpl(new SpotiAppAPIDataSourceImpl()));

    const handleOnChange = async(value: string) => {
        if(value.length > 0){
            const generalSearchItem: GeneralSearch = await useCase.invoke(value);
            setTrackList(generalSearchItem.track_list)
        }
    }

    return {
        trackList,
        handleOnChange
    }
}

export default SearchViewModel;