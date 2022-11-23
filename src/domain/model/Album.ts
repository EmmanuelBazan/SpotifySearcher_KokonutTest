import Artist from "./Artist"
import ImageItem from "./ImageItem"

/** Modelo de un album. */
export default interface Album {
    /** Id del album. */
    id: string,
    /** Tipo de album: "album","single","compilation". */
    album_type: string,
    /** Lista de artistas que participaron en el album. */
    artists: Artist[],
    /** Lista de diferentes formatos de la portada del album. */
    images: ImageItem[],
    /** Fecha de lanzamiento del album. */
    release_date: string,
    /** Nombre del album */
    name: string
}