import Album from "./Album";
import Artist from "./Artist";
import Track from "./Track";

/** Modelo de una busqueda sobre el servicio de Spotify */
export default interface GeneralSearch {
    /** Lista de albumes. */
    album_list: Album[],
    /** Lista de artistas. */
    artist_list: Artist[],
    /** Lista de canciones. */
    track_list: Track[],
}