import GeneralSearch from "../../../domain/model/GeneralSearch";
import SpotiAppDataSource from "../SpotiAppDataSource";
import GeneralSearchAPIEntity from "./entity/GeneralSearchAPIEntity";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Track from "../../../domain/model/Track";
import Album from "../../../domain/model/Album";
import Artist from "../../../domain/model/Artist";
import ImageItem from "../../../domain/model/ImageItem";

const BASE_URL = 'https://api.spotify.com/v1';

async function getStoredToken() {
    try {
        return await AsyncStorage.getItem('@storage_token');
    } catch (error) {
        return ''
    }
}

async function myFetch<T>(url: string, tken: string): Promise<T>{
    console.log("TOKEN ---> ",tken)
    return fetch(url,{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${tken}`
        }})
    .then((res) => res.json())
    .then((json) => {
        return json
    })
    .catch((err) => {
        return err
    })
}

class SpotiAppAPIDataSourceImpl implements SpotiAppDataSource {

    async getGeneralSearch(query: string): Promise<GeneralSearch> {
        let tken = await getStoredToken() as string;
        let response = await myFetch<GeneralSearchAPIEntity>(`${BASE_URL}/search?type=album,track,artist&q=${query}`,tken);
        const generalSearch: GeneralSearch = {
            album_list: response.albums.items,
            artist_list: response.artists.items,
            track_list: response.tracks.items.map((track: Track) => {
                const artistItem: Artist = {
                    id: track.artists.id,
                    name: track.artists.name,
                    images: track.artists.images,
                }
                const albumItem: Album = {
                    id: track.album.id,
                    album_type: track.album.album_type,
                    artists: artistItem,
                    images: track.album.images,
                    release_date: track.album.release_date
                }
                const trackItem: Track = {
                    id: track.id,
                    name: track.name,
                    album: albumItem,
                    artists: artistItem,
                    explicit: track.explicit
                }
                return trackItem;
            }),
        }
        // console.log("GENERAL SEARCH 2.0 ---> ",generalSearch.track_list);
        return generalSearch;
    }

}

export default SpotiAppAPIDataSourceImpl;