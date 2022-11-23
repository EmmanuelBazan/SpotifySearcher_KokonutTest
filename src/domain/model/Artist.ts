import ImageItem from "./ImageItem";

/** Modelo de un artista */
export default interface Artist {
    /** Id del artista. */
    id: string,
    /** Nombre del artista. */
    name: string,
    /** Lista de formatos de imagen de un artista */
    images?: ImageItem[],
}