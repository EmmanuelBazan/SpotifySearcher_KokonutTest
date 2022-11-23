import { useEffect, useState } from "react";
import { Dimensions, View } from "react-native";
import { RecyclerListView, DataProvider, BaseDataProvider, LayoutProvider } from "recyclerlistview";
import GeneralSearch from "../../../../domain/model/GeneralSearch";
import TrackBlockComp from "./TrackBlockComp";
import AlbumBlockComp from "./AlbumBlockComp";
import ArtistBlockComp from "./ArtistBlockComp";

const DIMENSIONS_SCREEN = Dimensions.get('screen');

const createNewDataProvider = ():any => {
    return new DataProvider((r1, r2) => r1 !== r2);
};

type recyclerType = {
    searchItem: GeneralSearch,
    filterItem: number
}

const RecyclerViewComp = ({searchItem,filterItem}: recyclerType) => {

    const [dataProvider,setDataProvider] = useState<BaseDataProvider>(createNewDataProvider());
    const [heightView,setHeightView] = useState(80);

    const _layoutProvider = new LayoutProvider(
        (index) => 0,
        (type,dim) => {
            dim.width = DIMENSIONS_SCREEN.width;
            dim.height = heightView;
        }
    )

    useEffect(() => {
        filterList()
    },[filterItem,searchItem])

    const filterList = () => {
        if(filterItem === 1){
            updateDataProvider(searchItem.track_list)
            setHeightView(80)
        } else if(filterItem === 2){
            updateDataProvider(searchItem.artist_list)
            setHeightView(80)
        } else if(filterItem === 3){
            updateDataProvider(searchItem.album_list)
            setHeightView(DIMENSIONS_SCREEN.width * 0.5)
        }
    }

    const updateDataProvider = (list: any[]) => {
        if(list.length > 0){
            setDataProvider(createNewDataProvider().cloneWithRows(list));
        }
    }

    return (
      <RecyclerListView
        dataProvider={dataProvider}
        layoutProvider={_layoutProvider}
        rowRenderer={(type, data) => {
          return(
              <>
              {
                  filterItem === 1 ?
                  <TrackBlockComp trackItem={data}/>
                  : filterItem === 2 ?
                  <ArtistBlockComp artistItem={data}/>
                  : filterItem === 3 ?
                  <AlbumBlockComp albumItem={data}/>
                  : <View/>
              }
              </>
          );
        }}
      />
    );
}

export default RecyclerViewComp;