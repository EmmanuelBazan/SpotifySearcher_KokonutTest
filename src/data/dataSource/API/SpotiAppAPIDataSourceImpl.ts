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
            album_list: response.albums.items.map((album) => {
                const albumItem: Album = {
                    id: album.id,
                    album_type: album.album_type,
                    artists: album.artists.map((artist) => {
                        const artistItem: Artist = {
                            id: artist.id,
                            name: artist.name,
                            images: artist.images?.map((img) => {
                                const imgItem: ImageItem = {
                                    height: img.height,
                                    url: img.url,
                                    width: img.width,
                                }
                                return imgItem
                            }),
                        }
                        return artistItem
                    }),
                    images: album.images.map((img) => {
                        const imgItem: ImageItem = {
                            height: img.height,
                            url: img.url,
                            width: img.width,
                        }
                        return imgItem
                    }),
                    release_date: album.release_date,
                    name: album.name
                }
                return albumItem
            }),
            artist_list: response.artists.items.map((artist) => {
                const artistItem: Artist = {
                    id: artist.id,
                    name: artist.name,
                    images: artist.images?.map((img) => {
                        const imgItem: ImageItem = {
                            height: img.height,
                            url: img.url,
                            width: img.width,
                        }
                        return imgItem
                    }),
                }
                return artistItem
            }),
            track_list: response.tracks.items.map((track) => {
                const albumItem: Album = {
                    id: track.album.id,
                    album_type: track.album.album_type,
                    images: track.album.images.map((img) => {
                        const imgItem: ImageItem = {
                            height: img.height,
                            url: img.url,
                            width: img.width,
                        }
                        return imgItem
                    }),
                    name: track.album.name,
                    release_date: track.album.release_date,
                    artists: track.artists.map((artist: Artist) => {
                        const artistItem: Artist = {
                            id: artist.id,
                            name: artist.name
                        }
                        return artistItem
                    }),
                }
                const trackItem: Track = {
                    id: track.id,
                    name: track.name,
                    album: albumItem,
                    explicit: track.explicit,
                    artists: track.artists.map((artist: Artist) => {
                        
                        const artistItem: Artist = {
                            id: artist.id,
                            name: artist.name
                        }
                        
                        return artistItem
                    })
                    
                }
                return trackItem;
            }),
        }
        return generalSearch;
    }

}

export default SpotiAppAPIDataSourceImpl;