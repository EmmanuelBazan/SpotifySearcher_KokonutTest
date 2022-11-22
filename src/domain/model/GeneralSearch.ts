import Album from "./Album";
import Artist from "./Artist";
import Track from "./Track";

export default interface GeneralSearch {
    album_list: Album[],
    artist_list: Artist[],
    track_list: Track[],
}