import GeneralSearch from "../../../domain/model/GeneralSearch";
import SpotiAppDataSource from "../SpotiAppDataSource";
import GeneralSearchAPIEntity from "./entity/GeneralSearchAPIEntity";
import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = 'https://api.spotify.com/v1';

async function getStoredToken() {
    try {
        return await AsyncStorage.getItem('@storage_token');
    } catch (error) {
        return ''
    }
}

async function myFetch<T>(url: string, tken: string): Promise<T>{
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
        console.log("RESPONSE ---> ",response);
        const generalSearch: GeneralSearch = {
            album_list: response.albums.items,
            artist_list: response.artists.items,
            track_list: response.tracks.items,
        }
        return generalSearch;
    }

}

export default SpotiAppAPIDataSourceImpl;