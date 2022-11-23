import Album from "./Album";
import Artist from "./Artist";

/** Modelo de una cancion. */
export default interface Track {
    /** Id de la cancion. */
    id: string,
    /** Lista de artistas que colaboraron en la cancion. */
    artists: Artist[],
    /** La cancion contiene letra explicita: "true","false". */
    explicit: boolean,
    /** Nombre de la cancion. */
    name: string,
    /** Album de la cancion. */
    album: Album,
}